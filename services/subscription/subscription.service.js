import { prisma } from "@/lib/prisma";
import { razorpay } from "@/lib/razorpay";
import crypto from "crypto";
import { authMiddleware } from "@/middleware/auth.middleware";

export const createSubscriptionService = async (req) => {
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

    const planName = process.env.MEMBERSHIP_PLAN_NAME || "Basic Membership";
    const amount = Number(process.env.MEMBERSHIP_AMOUNT || 999);
    const amountInPaise = amount * 100;

    const subscription = await prisma.subscription.create({
        data: {
            userId: user.id,
            planName,
            amount,
            status: "PENDING",
        },
    });

    const razorpayOrder = await razorpay.orders.create({
        amount: amountInPaise,
        currency: "INR",
        receipt: subscription.id,
        notes: {
            subscriptionId: subscription.id,
            userId: user.id,
            planName,
        },
    });

    return {
        subscriptionId: subscription.id,
        razorpayOrderId: razorpayOrder.id,
        razorpayKey: process.env.RAZORPAY_KEY,
        amount: amountInPaise,
        currency: "INR",
        planName,
    };
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
        include: {
            user: {
                include: {
                    company: true,
                },
            },
        },
    });

    if (!subscription) {
        const error = new Error("Pending subscription not found");
        error.statusCode = 404;
        throw error;
    }

    if (!subscription.user.company) {
        const error = new Error("Business profile not found");
        error.statusCode = 400;
        throw error;
    }

    const generatedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET)
        .update(`${razorpayOrderId}|${razorpayPaymentId}`)
        .digest("hex");

    if (generatedSignature !== razorpaySignature) {
        const error = new Error("Invalid payment signature");
        error.statusCode = 400;
        throw error;
    }

    const startDate = new Date();
    const endDate = new Date();
    endDate.setFullYear(endDate.getFullYear() + 1);

    const result = await prisma.$transaction(async (tx) => {
        const updatedSubscription = await tx.subscription.update({
            where: {
                id: subscription.id,
            },
            data: {
                status: "ACTIVE",
                paymentId: razorpayPaymentId,
                startDate,
                endDate,
            },
        });

        const updatedCompany = await tx.company.update({
            where: {
                userId: authUser.id,
            },
            data: {
                verificationStatus: "PENDING_APPROVAL",
            },
        });

        return {
            subscription: updatedSubscription,
            company: updatedCompany,
        };
    });

    return result;
};