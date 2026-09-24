import { prisma } from "@/lib/prisma";
import { createLeadSchema } from "@/validations/lead.validation";
import validator from "validator";
import xss from "xss";

export const createLeadService = async (body, req) => {

    // VALIDATE INPUT
    const validatedData = createLeadSchema.parse(body);

    // CREATE NAME
    const fullName =
        validatedData.name ||
        `${validatedData.firstName || ""} ${validatedData.lastName || ""}`.trim();

    // GET IP
    const forwarded = req.headers.get("x-forwarded-for");

    const ipAddress = forwarded ? forwarded.split(",")[0] : null;

    // SANITIZE INPUT
    const cleanData = {
        name: xss(fullName || ""),
        email: validator.normalizeEmail(validatedData.email),
        phone: validator.escape(validatedData.phone),

        subject: xss(validatedData.subject || ""),
        message: xss(validatedData.message || ""),

        formType: validatedData.formType,

        sourcePage: xss(validatedData.sourcePage || ""),
        sourceWebsite: xss(validatedData.sourceWebsite || ""),

        ipAddress,
    };

    // CREATE LEAD
    const lead = await prisma.lead.create({
        data: {
            name: cleanData.name,
            email: cleanData.email,
            phone: cleanData.phone,

            subject: cleanData.subject,
            message: cleanData.message,

            formType: cleanData.formType,

            sourcePage: cleanData.sourcePage,
            sourceWebsite: cleanData.sourceWebsite,
            ipAddress: cleanData.ipAddress,

            formData: body,
        },
    });

    return lead;
};