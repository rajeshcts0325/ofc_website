import { z } from "zod";

// REGISTER SCHEMA
export const registerSchema = z.object({
  email: z.string().email("Invalid email"),

  password: z
    .string()
    .min(8, "Password must be 8 characters")
    .regex(/[A-Z]/, "Must contain uppercase")
    .regex(/[a-z]/, "Must contain lowercase")
    .regex(/[0-9]/, "Must contain number"),

  fullName: z.string().min(2).max(50),

  phone: z
    .string()
    .regex(/^[0-9]+$/, "Phone must contain only numbers")
    .min(10, "Phone must be 10 digits")
    .max(15, "Phone too long"),

  role: z.enum(["SUPPLIER", "AGENCY"]),
});

// LOGIN SCHEMA
export const loginSchema = z.object({
  email: z.email("Invalid email"),

  password: z.string().min(1, "Password is required"),
});
