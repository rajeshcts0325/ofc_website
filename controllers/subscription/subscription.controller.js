import {
  createSubscriptionService, verifyPaymentService
} from "@/services/subscription/subscription.service";

export const createSubscriptionController = async (req) => {
  return await createSubscriptionService(req);
};

export const verifyPaymentController = async (body, req) => {
  return await verifyPaymentService(body, req);
};