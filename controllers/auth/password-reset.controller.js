import {
    forgotPasswordService,
    resetPasswordService,
} from "@/services/auth/password-reset.service";

export const forgotPasswordController = async (body) => {
    return await forgotPasswordService(body);
};

export const resetPasswordController = async (body) => {
    return await resetPasswordService(body);
};