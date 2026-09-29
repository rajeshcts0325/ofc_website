import {
  createSubscriptionService,
  verifyPaymentService,
  getPlansService,
} from "@/services/subscription/subscription.service";

export const createSubscriptionController = async (req, body) => {
  return await createSubscriptionService(req, body);
};

export const verifyPaymentController = async (body, req) => {
  return await verifyPaymentService(body, req);
};

export const getPlansController = async () => {
  return await getPlansService();
};