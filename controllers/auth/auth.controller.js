import { registerService } from "@/services/auth/auth.service";
import { loginService } from "@/services/auth/auth.service";
import { getMeService } from "@/services/auth/authme.service";

// REGISTER
export const registerController = async (body) => {
  return registerService(body);
};

// LOGIN
export const loginController = async (body) => {
  return loginService(body);
};

// MY STATUS
export const getMeController = async (req) => {
  return getMeService(req);
};