import {
  getAdminPaymentLogsService,
  getAdminPaymentByIdService,
} from "@/services/admin/payment/admin-payment.service";

export const getAdminPaymentLogsController = async (req, query) => {
  return await getAdminPaymentLogsService(req, query);
};

export const getAdminPaymentByIdController = async (req, paymentId) => {
  return await getAdminPaymentByIdService(req, paymentId);
};