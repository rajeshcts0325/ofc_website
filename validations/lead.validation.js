import { z } from "zod";

export const createLeadSchema = z.object({
    firstName: z.string().min(2, "First name is required").optional(),
    lastName: z.string().optional(),

    name: z.string().optional(),

    email: z.string().email("Valid email is required"),
    phone: z.string().min(10, "Valid phone number is required"),

    subject: z.string().optional(),
    message: z.string().optional(),

    formType: z.enum([
        "CONTACT",
        "ENQUIRY",
        "MATERIAL_INQUIRY",
        "EQUIPMENT_RENTAL",
        "INSURANCE",
        "FINANCE",
        "SERVICE_REQUEST",
        "GENERAL",
    ]),

    sourcePage: z.string().optional(),
    sourceWebsite: z.string().optional(),
});