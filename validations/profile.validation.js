import { z } from "zod";

export const completeProfileSchema = z.object({

    fullName: z
        .string()
        .trim()
        .min(2, "Full name is required")
        .max(100, "Full name is too long"),

    phone: z
        .string()
        .trim()
        .min(10, "Valid phone number is required")
        .max(15, "Phone number is too long"),

    companyName: z
        .string()
        .trim()
        .min(2, "Company name is required")
        .max(150, "Company name is too long"),

    businessType: z.enum([
        "INDIVIDUAL",
        "PROPRIETORSHIP",
        "PARTNERSHIP",
        "LLP",
        "PRIVATE_LIMITED",
        "PUBLIC_LIMITED",
        "OTHER",
    ]),

    gstNumber: z
        .string()
        .trim()
        .optional()
        .or(z.literal(""))
        .refine(
            (val) =>
                !val ||
                /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(
                    val.toUpperCase()
                ),
            "Enter valid 15 digit GST number"
        ),

    panNumber: z
        .string()
        .trim()
        .optional()
        .or(z.literal(""))
        .refine(
            (val) =>
                !val ||
                /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(
                    val.toUpperCase()
                ),
            "Enter valid PAN number"
        ),

    registrationNumber: z
        .string()
        .trim()
        .max(100, "Registration number is too long")
        .optional()
        .or(z.literal("")),

    category: z
        .string()
        .trim()
        .min(2, "Business category is required")
        .max(100, "Category is too long"),

    experience: z.coerce
        .number()
        .min(0, "Experience cannot be negative")
        .max(100, "Experience is too high")
        .optional()
        .nullable(),

    description: z
        .string()
        .trim()
        .max(1000, "Description is too long")
        .optional()
        .or(z.literal("")),

    website: z
        .string()
        .trim()
        .max(255, "Website URL is too long")
        .nullable()
        .optional()
        .refine(
            (value) =>
                value === null ||
                value === "" ||
                /^https?:\/\/.+/i.test(value),
            "Please enter a valid website URL"
        ),

    businessEmail: z
        .string()
        .trim()
        .email("Enter a valid business email")
        .max(150, "Business email is too long")
        .optional()
        .or(z.literal("")),

    businessPhone: z
        .string()
        .trim()
        .min(10, "Business phone number is invalid")
        .max(15, "Business phone number is too long")
        .optional()
        .or(z.literal("")),

    address: z
        .string()
        .trim()
        .max(500, "Address is too long")
        .optional()
        .or(z.literal("")),

    stateId: z
        .string()
        .uuid("Please select a valid state"),

    cityId: z
        .string()
        .uuid("Please select a valid city"),
});
