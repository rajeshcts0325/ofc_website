import { prisma } from "@/lib/prisma";
import { razorpay } from "@/lib/razorpay";
import crypto from "crypto";
import { authMiddleware } from "@/middleware/auth.middleware";

export const getPlansService = async () => {
    return await prisma.subscriptionPlan.findMany({
        where: { isActive: true },
        orderBy: { price: "asc" },
        select: {
            id: true,
            name: true,
            slug: true,
            description: true,
            price: true,
            billingCycle: true,
        },
    });
};

export const createSubscriptionService = async (req, body = {}) => {
    const authUser = await authMiddleware(req);

    if (!authUser) {
        const error = new Error("Unauthorized");
        error.statusCode = 401;
        throw error;
    }

    const user = await prisma.user.findUnique({
        where: {
            id: authUser.id,
        },
        include: {
            profile: true,
            company: true,
            subscriptions: {
                orderBy: {
                    createdAt: "desc",
                },
            },
        },
    });

    if (!user) {
        const error = new Error("User not found");
        error.statusCode = 404;
        throw error;
    }

    if (user.role === "ADMIN") {
        const error = new Error("Admin does not need subscription");
        error.statusCode = 403;
        throw error;
    }

    if (!user.profile || !user.company) {
        const error = new Error("Please complete business profile first");
        error.statusCode = 400;
        throw error;
    }

    const activeSubscription = user.subscriptions.find(
        (sub) => sub.status === "ACTIVE"
    );

    if (activeSubscription) {
        const error = new Error("You already have an active subscription");
        error.statusCode = 400;
        throw error;
    }

    if (user.onboardingStatus !== "SUBSCRIPTION_PENDING") {
        const error = new Error("Your company must be KYC verified before subscribing");
        error.statusCode = 403;
        throw error;
    }

    const { planId } = body;

    if (!planId) {
        const error = new Error("Please choose a subscription plan");
        error.statusCode = 400;
        throw error;
    }

    const plan = await prisma.subscriptionPlan.findFirst({
        where: { id: planId, isActive: true },
    });

    if (!plan) {
        const error = new Error("Selected plan is not available");
        error.statusCode = 404;
        throw error;
    }

    const amountInPaise = Math.round(plan.price * 100);

    // cancel stale unpaid attempts so they don't pile up
    await prisma.subscription.updateMany({
        where: { userId: user.id, status: "PENDING" },
        data: { status: "CANCELLED", cancelledAt: new Date() },
    });

    const subscription = await prisma.subscription.create({
        data: {
            userId: user.id,
            planId: plan.id,
            amount: plan.price,
            billingCycle: plan.billingCycle,
        },
    });

    const razorpayOrder = await razorpay.orders.create({
        amount: amountInPaise,
        currency: "INR",
        receipt: subscription.id,
        notes: {
            subscriptionId: subscription.id,
            userId: user.id,
            planId: plan.id,
        },
    });

    await prisma.payment.create({
        data: {
            userId: user.id,
            subscriptionId: subscription.id,
            amount: plan.price,
            currency: "INR",
            razorpayOrderId: razorpayOrder.id,
        },
    });

    return {
        subscriptionId: subscription.id,
        razorpayOrderId: razorpayOrder.id,
        razorpayKey: process.env.RAZORPAY_KEY,
        amount: amountInPaise,
        currency: "INR",
        planName: plan.name,
    };
};

const addBillingPeriod = (date, cycle) => {
    const d = new Date(date);
    if (cycle === "YEARLY") d.setFullYear(d.getFullYear() + 1);
    else d.setMonth(d.getMonth() + 1);
    return d;
};

export const verifyPaymentService = async (body, req) => {
    const authUser = await authMiddleware(req);

    if (!authUser) {
        const error = new Error("Unauthorized");
        error.statusCode = 401;
        throw error;
    }

    const {
        subscriptionId,
        razorpayOrderId,
        razorpayPaymentId,
        razorpaySignature,
    } = body;

    if (
        !subscriptionId ||
        !razorpayOrderId ||
        !razorpayPaymentId ||
        !razorpaySignature
    ) {
        const error = new Error("Payment verification details are required");
        error.statusCode = 400;
        throw error;
    }

    const subscription = await prisma.subscription.findFirst({
        where: {
            id: subscriptionId,
            userId: authUser.id,
            status: "PENDING",
        },
    });

    if (!subscription) {
        const error = new Error("Pending subscription not found");
        error.statusCode = 404;
        throw error;
    }

    const payment = await prisma.payment.findFirst({
        where: {
            razorpayOrderId,
            subscriptionId: subscription.id,
            userId: authUser.id,
            status: { in: ["CREATED", "PENDING"] },
        },
    });

    if (!payment) {
        const error = new Error("Payment record not found");
        error.statusCode = 404;
        throw error;
    }

    const generatedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET)
        .update(`${razorpayOrderId}|${razorpayPaymentId}`)
        .digest("hex");

    if (generatedSignature !== razorpaySignature) {
        await prisma.payment.update({
            where: { id: payment.id },
            data: { status: "FAILED", failureReason: "Invalid payment signature" },
        });

        const error = new Error("Invalid payment signature");
        error.statusCode = 400;
        throw error;
    }

    const startDate = new Date();
    const endDate = addBillingPeriod(startDate, subscription.billingCycle);

    const result = await prisma.$transaction(async (tx) => {
        const updatedPayment = await tx.payment.update({
            where: { id: payment.id },
            data: {
                status: "SUCCESS",
                razorpayPaymentId,
                razorpaySignature,
                paidAt: new Date(),
            },
        });

        const updatedSubscription = await tx.subscription.update({
            where: { id: subscription.id },
            data: { status: "ACTIVE", startDate, endDate },
        });

        await tx.user.update({
            where: { id: authUser.id },
            data: { onboardingStatus: "ACTIVE" },
        });

        return { subscription: updatedSubscription, payment: updatedPayment };
    });

    return result;
};
