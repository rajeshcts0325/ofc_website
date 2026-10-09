import {
    createSubscriptionService,
    verifyPaymentService,
    getPlansService,
    handleWebhookService,
} from "@/services/subscription/subscription.service";

export const createSubscriptionController = async (req, body) => {
    return createSubscriptionService(req, body);
};

export const verifyPaymentController = async (body, req) => {
    return verifyPaymentService(body, req);
};

export const getPlansController = async () => {
    return getPlansService();
};

export const razorpayWebhookController = async (rawBody, headers) => {
    return handleWebhookService(
        rawBody,
        headers.get("x-razorpay-signature"),
        headers.get("x-razorpay-event-id")
    );
};