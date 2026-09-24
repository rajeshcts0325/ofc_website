import { z } from "zod";

export const forgotPasswordSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Valid email is required")
        .toLowerCase(),
});

export const resetPasswordSchema = z
    .object({
        token: z.string().min(20, "Reset token is required"),

        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(/[A-Z]/, "Password must contain one uppercase letter")
            .regex(/[a-z]/, "Password must contain one lowercase letter")
            .regex(/[0-9]/, "Password must contain one number"),

        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });