import { prisma } from "@/lib/prisma";
import { razorpay } from "@/lib/razorpay";
import crypto from "crypto";
import { authMiddleware } from "@/middleware/auth.middleware";

/* ---------- helpers ---------- */

const createError = (message, statusCode) => Object.assign(new Error(message), { statusCode });

const TX = { timeout: 15000, maxWait: 10000 };
const toDate = (unix) => (unix ? new Date(unix * 1000) : null);
const toPaise = (rupees) => Math.round(rupees * 100);
const hmac = (secret, data) => crypto.createHmac("sha256", secret).update(data).digest("hex");

const safeEqual = (a, b) => {
    if (typeof a !== "string" || typeof b !== "string") return false;
    const x = Buffer.from(a.toLowerCase());
    const y = Buffer.from(b.toLowerCase());
    return x.length === y.length && crypto.timingSafeEqual(x, y);
};

// Serialises concurrent work on one key (verify + webhook, duplicate events, double clicks).
const withLock = (key, fn) =>
    prisma.$transaction(async (tx) => {
        await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext(${key}::text))`;
        return fn(tx);
    }, TX);

/* ---------- access + state sync ---------- */

// Dashboard access rule: an ACTIVE subscription with at least one SUCCESS payment.
const syncUserAccess = async (tx, userId) => {
    const active =
        (await tx.subscription.count({
            where: { userId, status: "ACTIVE", payments: { some: { status: "SUCCESS" } } },
        })) > 0;

    await tx.user.updateMany({
        where: {
            id: userId,
            role: { not: "ADMIN" },
            onboardingStatus: active ? "SUBSCRIPTION_PENDING" : "ACTIVE",
        },
        data: { onboardingStatus: active ? "ACTIVE" : "SUBSCRIPTION_PENDING" },
    });
};

// Maps a LIVE Razorpay subscription (never browser data) onto the local row.
// created/authenticated/pending -> unchanged (still PENDING / grace period)
const applySubscriptionState = async (tx, id, rzp) => {
    const sub = await tx.subscription.findUnique({ where: { id } });
    if (!sub) return;

    const paid = (await tx.payment.count({ where: { subscriptionId: id, status: "SUCCESS" } })) > 0;
    const end = toDate(rzp.current_end) || new Date();
    const dead = { status: paid ? "EXPIRED" : "FAILED" };

    const data = {
        active: paid && {
            status: "ACTIVE",
            cancelledAt: null,
            startDate: sub.startDate || toDate(rzp.current_start) || new Date(),
            endDate: sub.endDate > end ? sub.endDate : end, // only moves forward
        },
        paused: { status: "PAUSED" },
        cancelled: { status: "CANCELLED", cancelledAt: toDate(rzp.ended_at) || new Date() },
        completed: { status: "EXPIRED" },
        halted: dead,
        expired: dead,
    }[rzp.status];

    if (data) await tx.subscription.update({ where: { id }, data });
    await syncUserAccess(tx, sub.userId);
};

/* ---------- payment records ---------- */

// Idempotent upsert by razorpayPaymentId. The first real payment claims the
// placeholder row; later billing cycles create new rows. Run inside withLock().
const recordPayment = async (tx, { subscription, rzpPayment, status, signature, failureReason }) => {
    const data = {
        amount: rzpPayment.amount / 100,
        currency: rzpPayment.currency || "INR",
        status,
        razorpayPaymentId: rzpPayment.id,
        razorpayInvoiceId: rzpPayment.invoice_id || null, // real id or null
        paidAt: status === "SUCCESS" ? toDate(rzpPayment.created_at) || new Date() : null,
        failureReason: status === "FAILED" ? failureReason || null : null,
        ...(signature && { razorpaySignature: signature }),
    };

    const existing =
        (await tx.payment.findUnique({ where: { razorpayPaymentId: rzpPayment.id } })) ||
        (await tx.payment.findFirst({
            where: { subscriptionId: subscription.id, razorpayPaymentId: null, status: { in: ["CREATED", "PENDING"] } },
            orderBy: { createdAt: "asc" },
        }));

    if (!existing) {
        return tx.payment.create({ data: { userId: subscription.userId, subscriptionId: subscription.id, ...data } });
    }
    // never downgrade a settled payment on out-of-order events
    if (existing.status === "REFUNDED" || (existing.status === "SUCCESS" && status !== "SUCCESS")) return existing;

    return tx.payment.update({ where: { id: existing.id }, data: { ...data, paidAt: existing.paidAt || data.paidAt } });
};

/* ---------- plans ---------- */

export const getPlansService = () =>
    prisma.subscriptionPlan.findMany({
        where: { isActive: true },
        orderBy: { price: "asc" },
        select: { id: true, name: true, slug: true, description: true, price: true, billingCycle: true },
    });

/* ---------- create subscription ---------- */

// Only touches rows still PENDING, so it can't clobber a webhook that just activated it.
const retire = (id, status, reason) =>
    prisma.$transaction([
        prisma.subscription.updateMany({
            where: { id, status: "PENDING" },
            data: { status, ...(status === "CANCELLED" && { cancelledAt: new Date() }) },
        }),
        prisma.payment.updateMany({
            where: { subscriptionId: id, status: { in: ["CREATED", "PENDING"] } },
            data: { status: "FAILED", failureReason: reason },
        }),
    ]);

const reserve = (userId, plan) =>
    withLock(`subscribe:${userId}`, async (tx) => {
        const open = await tx.subscription.findMany({ where: { userId, status: { in: ["ACTIVE", "PENDING"] } } });
        if (open.some((s) => s.status === "ACTIVE")) throw createError("You already have an active subscription", 409);
        if (open.length) return { open };

        const subscription = await tx.subscription.create({
            data: { userId, planId: plan.id, amount: plan.price, billingCycle: plan.billingCycle, status: "PENDING" },
        });
        // placeholder only: no order/invoice/payment ids until Razorpay provides real ones
        await tx.payment.create({
            data: { userId, subscriptionId: subscription.id, amount: plan.price, currency: "INR", status: "CREATED" },
        });
        return { subscription };
    });

// Cleans up leftover PENDING subscriptions; returns a reusable one (same plan, Checkout never completed).
const resolveOpen = async (openSubs, plan) => {
    let reusable = null;

    for (const sub of openSubs) {
        if (!sub.razorpaySubscriptionId) {
            if (Date.now() - sub.createdAt.getTime() < 120000) {
                throw createError("Your subscription is being set up. Please try again in a moment.", 409);
            }
            await retire(sub.id, "FAILED", "Subscription creation did not complete");
            continue;
        }

        const rzp = await razorpay.subscriptions.fetch(sub.razorpaySubscriptionId).catch((e) => {
            console.error("RAZORPAY FETCH ERROR:", e);
            throw createError("Unable to check your existing subscription with Razorpay", 502);
        });

        if (["authenticated", "active", "pending"].includes(rzp.status)) {
            throw createError("Your payment is being processed. Please wait a moment and refresh.", 409);
        }
        if (rzp.status === "created" && sub.planId === plan.id && !reusable) {
            reusable = sub;
        } else if (rzp.status === "created") {
            await retire(sub.id, "CANCELLED", "Superseded by a new subscription attempt"); // expires via expire_by
        } else {
            await retire(sub.id, rzp.status === "cancelled" ? "CANCELLED" : "FAILED", `Razorpay subscription is ${rzp.status}`);
        }
    }
    return reusable;
};

const checkoutPayload = (razorpaySubscriptionId, subscriptionId, plan) => ({
    subscriptionId,
    razorpaySubscriptionId,
    razorpayKey: process.env.RAZORPAY_KEY,
    planName: plan.name,
    amount: plan.price, // rupees, display only; Checkout reads it from the subscription
    currency: "INR",
    billingCycle: plan.billingCycle,
});

export const createSubscriptionService = async (req, body = {}) => {
    const authUser = await authMiddleware(req);
    if (!authUser) throw createError("Unauthorized", 401);

    const planId = body?.planId;
    if (!planId || typeof planId !== "string") throw createError("Please choose a valid subscription plan", 400);

    const user = await prisma.user.findUnique({
        where: { id: authUser.id },
        include: { profile: true, company: true },
    });
    if (!user) throw createError("User not found", 404);
    if (user.role === "ADMIN") throw createError("Admin does not need a subscription", 403);
    if (!user.profile || !user.company) throw createError("Please complete your business profile first", 400);
    if (user.onboardingStatus !== "SUBSCRIPTION_PENDING") {
        throw createError("Your company must be verified before subscribing", 403);
    }

    const plan = await prisma.subscriptionPlan.findFirst({ where: { id: planId, isActive: true } });
    if (!plan) throw createError("Selected plan is not available", 404);
    if (!plan.razorpayPlanId) throw createError("Razorpay Plan ID is not configured for this plan", 500);

    const rzpPlan = await razorpay.plans.fetch(plan.razorpayPlanId).catch((e) => {
        console.error("RAZORPAY PLAN FETCH ERROR:", e);
        throw createError("Unable to validate the plan with Razorpay", 502);
    });
    if (rzpPlan?.item?.amount !== toPaise(plan.price)) {
        throw createError("Plan price does not match the Razorpay plan. Please contact support.", 500);
    }

    let reservation = await reserve(user.id, plan);

    if (reservation.open) {
        const reusable = await resolveOpen(reservation.open, plan);
        if (reusable) return checkoutPayload(reusable.razorpaySubscriptionId, reusable.id, plan);

        reservation = await reserve(user.id, plan);
        if (reservation.open) throw createError("A previous attempt is still being processed. Please try again shortly.", 409);
    }

    const { subscription } = reservation;

    try {
        const rzpSub = await razorpay.subscriptions.create({
            plan_id: plan.razorpayPlanId,
            total_count: plan.billingCycle === "YEARLY" ? 10 : 120,
            customer_notify: 1,
            expire_by: Math.floor(Date.now() / 1000) + 86400, // must authorise within 24h
            notes: { subscriptionId: subscription.id, userId: user.id, planId: plan.id },
        });

        await prisma.subscription.update({
            where: { id: subscription.id },
            data: { razorpaySubscriptionId: rzpSub.id },
        });
        return checkoutPayload(rzpSub.id, subscription.id, plan);
    } catch (error) {
        console.error("RAZORPAY SUBSCRIPTION CREATE ERROR:", error);
        await retire(subscription.id, "FAILED", "Unable to create Razorpay subscription");
        throw createError(error?.error?.description || "Unable to start the subscription. Please try again.", 502);
    }
};

/* ---------- verify payment (Checkout handler -> server) ---------- */

const buildResult = async (subscriptionId, razorpayPaymentId, extra = {}) => {
    const sub = await prisma.subscription.findUnique({
        where: { id: subscriptionId },
        include: { plan: { select: { name: true } } },
    });
    const p = razorpayPaymentId
        ? await prisma.payment.findUnique({ where: { razorpayPaymentId } })
        : null;

    return {
        verified: true,
        activated: sub.status === "ACTIVE",
        ...extra,
        subscription: {
            id: sub.id,
            razorpaySubscriptionId: sub.razorpaySubscriptionId,
            status: sub.status,
            planName: sub.plan.name,
            billingCycle: sub.billingCycle,
            amount: sub.amount,
            startDate: sub.startDate,
            endDate: sub.endDate,
        },
        payment: p && {
            id: p.id,
            razorpayPaymentId: p.razorpayPaymentId,
            razorpaySubscriptionId: sub.razorpaySubscriptionId,
            razorpayInvoiceId: p.razorpayInvoiceId, // null when unavailable
            amount: p.amount,
            currency: p.currency,
            status: p.status,
            paidAt: p.paidAt,
            planName: sub.plan.name,
        },
    };
};

export const verifyPaymentService = async (body, req) => {
    const authUser = await authMiddleware(req);
    if (!authUser) throw createError("Unauthorized", 401);

    const { subscriptionId, razorpayPaymentId, razorpaySubscriptionId, razorpaySignature } = body ?? {};
    if (![subscriptionId, razorpayPaymentId, razorpaySubscriptionId, razorpaySignature].every((v) => typeof v === "string" && v)) {
        throw createError("Payment verification details are required", 400);
    }

    const subscription = await prisma.subscription.findFirst({
        where: { id: subscriptionId, userId: authUser.id, razorpaySubscriptionId },
        include: { plan: true },
    });
    if (!subscription) throw createError("Subscription not found", 404);

    // Subscription signature = HMAC_SHA256(payment_id + "|" + subscription_id)  (payment id FIRST)
    if (!safeEqual(razorpaySignature, hmac(process.env.RAZORPAY_SECRET, `${razorpayPaymentId}|${razorpaySubscriptionId}`))) {
        throw createError("Invalid payment signature", 400);
    }

    const existing = await prisma.payment.findUnique({ where: { razorpayPaymentId } });
    if (existing && existing.subscriptionId !== subscription.id) {
        throw createError("Payment does not belong to this subscription", 409);
    }
    if (existing?.status === "SUCCESS" && subscription.status === "ACTIVE") {
        return buildResult(subscription.id, razorpayPaymentId); // idempotent replay
    }

    // never trust the browser: confirm everything with Razorpay
    let rzpPayment, rzpSub, invoice;
    try {
        [rzpPayment, rzpSub] = await Promise.all([
            razorpay.payments.fetch(razorpayPaymentId),
            razorpay.subscriptions.fetch(razorpaySubscriptionId),
        ]);
        invoice = rzpPayment.invoice_id ? await razorpay.invoices.fetch(rzpPayment.invoice_id) : null;
    } catch (e) {
        console.error("RAZORPAY VERIFY FETCH ERROR:", e);
        throw createError("Unable to verify payment with Razorpay", 502);
    }

    if (rzpSub.plan_id !== subscription.plan.razorpayPlanId || invoice?.subscription_id !== razorpaySubscriptionId) {
        throw createError("Payment does not belong to this subscription", 400);
    }
    if (rzpPayment.amount !== toPaise(subscription.amount) || rzpPayment.currency !== "INR") {
        throw createError("Payment details do not match the subscription", 400);
    }

    if (rzpPayment.status === "failed") {
        await withLock(`subscription:${subscription.id}`, (tx) =>
            recordPayment(tx, { subscription, rzpPayment, status: "FAILED", failureReason: rzpPayment.error_description })
        );
        throw createError(rzpPayment.error_description || "Payment failed", 400);
    }

    // authorized/created: the webhook finalises it. Do NOT activate.
    if (rzpPayment.status !== "captured") return buildResult(subscription.id, null, { activated: false, pending: true });

    await withLock(`subscription:${subscription.id}`, async (tx) => {
        await recordPayment(tx, { subscription, rzpPayment, status: "SUCCESS", signature: razorpaySignature });
        await applySubscriptionState(tx, subscription.id, rzpSub);
    });

    return buildResult(subscription.id, razorpayPaymentId);
};

/* ---------- webhook ---------- */

const findLocalSubscription = async (id, notes) => {
    if (!id) return null;
    const find = () => prisma.subscription.findUnique({ where: { razorpaySubscriptionId: id } });

    const sub = await find();
    if (sub || !notes?.subscriptionId) return sub;

    // webhook beat our own DB update after subscriptions.create()
    await prisma.subscription.updateMany({
        where: { id: notes.subscriptionId, razorpaySubscriptionId: null },
        data: { razorpaySubscriptionId: id },
    });
    return find();
};

// First payment AND every recurring cycle. Live data from Razorpay decides, not the event copy.
const handleCharged = async (event) => {
    const { subscription: s, payment: p } = event.payload ?? {};
    const local = await findLocalSubscription(s?.entity?.id, s?.entity?.notes);
    if (!local || !p?.entity?.id) return false;

    const [rzpPayment, rzpSub] = await Promise.all([
        razorpay.payments.fetch(p.entity.id),
        razorpay.subscriptions.fetch(local.razorpaySubscriptionId),
    ]);
    if (rzpPayment.status !== "captured") return false;

    await withLock(`subscription:${local.id}`, async (tx) => {
        await recordPayment(tx, { subscription: local, rzpPayment, status: "SUCCESS" });
        await applySubscriptionState(tx, local.id, rzpSub);
    });
    return true;
};

// authenticated / activated / pending / halted / paused / resumed / cancelled / completed / updated
const handleSubscriptionEvent = async (event) => {
    const e = event.payload?.subscription?.entity;
    const local = await findLocalSubscription(e?.id, e?.notes);
    if (!local) return false;

    const rzpSub = await razorpay.subscriptions.fetch(local.razorpaySubscriptionId);
    await withLock(`subscription:${local.id}`, (tx) => applySubscriptionState(tx, local.id, rzpSub));
    return true;
};

const handlePaymentFailed = async (event) => {
    const rzpPayment = event.payload?.payment?.entity;
    if (!rzpPayment?.invoice_id) return false; // not a subscription charge

    const invoice = await razorpay.invoices.fetch(rzpPayment.invoice_id);
    const local = invoice?.subscription_id && (await findLocalSubscription(invoice.subscription_id));
    if (!local) return false;

    await withLock(`subscription:${local.id}`, (tx) =>
        recordPayment(tx, {
            subscription: local,
            rzpPayment,
            status: "FAILED",
            failureReason: rzpPayment.error_description || rzpPayment.error_reason,
        })
    );
    return true;
};

const dispatch = (e) =>
    e.event === "subscription.charged" ? handleCharged(e)
        : e.event === "payment.failed" ? handlePaymentFailed(e)
            : e.event?.startsWith("subscription.") ? handleSubscriptionEvent(e)
                : false; // payment.captured etc. are covered by subscription.charged

export const handleWebhookService = async (rawBody, signature, eventIdHeader) => {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    if (!secret) throw createError("Webhook secret is not configured", 500);
    if (!rawBody || !signature || !safeEqual(signature, hmac(secret, rawBody))) {
        throw createError("Invalid webhook signature", 400); // verified against the RAW body
    }

    let event;
    try {
        event = JSON.parse(rawBody);
    } catch {
        throw createError("Invalid webhook payload", 400);
    }

    const eventId = eventIdHeader || crypto.createHash("sha256").update(rawBody).digest("hex");

    // idempotency: one row per Razorpay event id
    try {
        await prisma.webhookEvent.create({ data: { eventId, eventType: event.event || "unknown" } });
    } catch (err) {
        if (err.code !== "P2002") throw err;
        const seen = await prisma.webhookEvent.findUnique({ where: { eventId } });
        if (seen?.processedAt) return { duplicate: true };
        // seen but unfinished (earlier attempt failed): reprocess; handlers are idempotent
    }

    try {
        const handled = await dispatch(event);
        await prisma.webhookEvent.update({ where: { eventId }, data: { processedAt: new Date(), error: null } });
        return { received: true, handled: Boolean(handled) };
    } catch (err) {
        console.error("WEBHOOK PROCESSING ERROR:", event.event, err);
        const message = String(err?.message || err?.error?.description || "Webhook failed").slice(0, 500);
        await prisma.webhookEvent.update({ where: { eventId }, data: { error: message } }).catch(() => { });
        throw createError(message, 500); // 500 => Razorpay retries
    }
};