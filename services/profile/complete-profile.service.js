import validator from "validator";
import xss from "xss";

import { prisma } from "@/lib/prisma";
import { authMiddleware } from "@/middleware/auth.middleware";
import { completeProfileSchema } from "@/validations/profile.validation";

export const completeProfileService = async (body, req) => {
    console.log("COMPLETE PROFILE SERVICE BODY:", body);

    const authUser = await authMiddleware(req);

    if (!authUser) {
        const error = new Error("Unauthorized");
        error.statusCode = 401;
        throw error;
    }

    const validatedData = completeProfileSchema.parse(body);

    const cleanData = {
        fullName: xss(validatedData.fullName),
        phone: validator.escape(validatedData.phone),

        companyName: xss(validatedData.companyName),

        businessType: validatedData.businessType,

        gstNumber: validatedData.gstNumber
            ? validator.escape(validatedData.gstNumber.toUpperCase())
            : null,

        panNumber: validatedData.panNumber
            ? validator.escape(validatedData.panNumber.toUpperCase())
            : null,

        registrationNumber: validatedData.registrationNumber
            ? xss(validatedData.registrationNumber)
            : null,

        category: xss(validatedData.category),

        experience: validatedData.experience !== undefined
            ? Number(validatedData.experience)
            : null,

        description: validatedData.description
            ? xss(validatedData.description)
            : null,

        website: validatedData.website
            ? validatedData.website.trim()
            : null,

        businessEmail: validatedData.businessEmail
            ? validator.escape(validatedData.businessEmail)
            : null,

        businessPhone: validatedData.businessPhone
            ? validator.escape(validatedData.businessPhone)
            : null,

        address: validatedData.address
            ? xss(validatedData.address)
            : null,

        stateId: validatedData.stateId,
        cityId: validatedData.cityId,
    };

    const user = await prisma.user.findUnique({
        where: {
            id: authUser.id,
        },
        select: {
            id: true,
            role: true,
            status: true,
            profile: true,
            company: true,
        },
    });

    if (!user) {
        const error = new Error("User not found");
        error.statusCode = 404;
        throw error;
    }

    if (user.role === "ADMIN") {
        const error = new Error("Admin does not need business profile verification");
        error.statusCode = 403;
        throw error;
    }

    if (user.status !== "ACTIVE") {
        const error = new Error("Your account is suspended");
        error.statusCode = 403;
        throw error;
    }

    // const companyUpdateData = {
    //     name: cleanData.companyName,
    //     gstNumber: cleanData.gstNumber,
    //     category: cleanData.category,
    //     experience: cleanData.experience,
    //     stateId: cleanData.stateId,
    //     cityId: cleanData.cityId,
    // };

    // if (
    //     !user.company ||
    //     user.company.verificationStatus === "REJECTED"
    // ) {
    //     companyUpdateData.verificationStatus = "PROFILE_PENDING";
    // }

    const result = await prisma.$transaction(
        async (tx) => {

            // 1. Validate state
            const state = await tx.state.findUnique({
                where: {
                    id: cleanData.stateId,
                },
                select: {
                    id: true,
                    name: true,
                },
            });

            if (!state) {
                const error = new Error("Selected state does not exist");
                error.statusCode = 400;
                throw error;
            }

            // 2. Validate city
            const city = await tx.city.findFirst({
                where: {
                    id: cleanData.cityId,
                    stateId: cleanData.stateId,
                },
                select: {
                    id: true,
                    name: true,
                    stateId: true,
                },
            });

            if (!city) {
                const error = new Error(
                    "Selected city does not belong to the selected state"
                );
                error.statusCode = 400;
                throw error;
            }

            // 3. Profile
            const profile = await tx.profile.upsert({
                where: {
                    userId: user.id,
                },
                update: {
                    fullName: cleanData.fullName,
                    phone: cleanData.phone,
                },
                create: {
                    userId: user.id,
                    fullName: cleanData.fullName,
                    phone: cleanData.phone,
                },
            });

            // 4. Company
            const company = await tx.company.upsert({
                where: {
                    userId: user.id,
                },
                update: {
                    name: cleanData.companyName,
                    businessType: cleanData.businessType,
                    gstNumber: cleanData.gstNumber,
                    panNumber: cleanData.panNumber,
                    registrationNumber: cleanData.registrationNumber,
                    category: cleanData.category,
                    experience: cleanData.experience,
                    description: cleanData.description,
                    website: cleanData.website,
                    businessEmail: cleanData.businessEmail,
                    businessPhone: cleanData.businessPhone,
                    address: cleanData.address,
                    stateId: cleanData.stateId,
                    cityId: cleanData.cityId,
                    onboardingCompleted: true,
                },
                create: {
                    userId: user.id,
                    name: cleanData.companyName,
                    businessType: cleanData.businessType,
                    gstNumber: cleanData.gstNumber,
                    panNumber: cleanData.panNumber,
                    registrationNumber: cleanData.registrationNumber,
                    category: cleanData.category,
                    experience: cleanData.experience,
                    description: cleanData.description,
                    website: cleanData.website,
                    businessEmail: cleanData.businessEmail,
                    businessPhone: cleanData.businessPhone,
                    address: cleanData.address,
                    stateId: cleanData.stateId,
                    cityId: cleanData.cityId,
                    onboardingCompleted: true,
                },
            });

            // 5. Create or update KYC application
            const kycApplication = await tx.kycApplication.upsert({
                where: {
                    companyId: company.id,
                },
                update: {
                    status: "UNDER_REVIEW",
                    submittedAt: new Date(),
                    rejectedAt: null,
                    rejectionReason: null,
                    correctionRequired: false,
                },
                create: {
                    companyId: company.id,
                    status: "UNDER_REVIEW",
                    submittedAt: new Date(),
                    submittedVersion: 1,
                    correctionRequired: false,
                },
            });

            // if (!kycApplication) {
            //     kycApplication = await tx.kycApplication.create({
            //         data: {
            //             companyId: company.id,
            //             status: "NOT_STARTED",
            //         },
            //     });
            // }

            // 6. Update onboarding status
            const updatedUser = await tx.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    onboardingStatus: "KYC_UNDER_REVIEW",
                },
                select: {
                    id: true,
                    email: true,
                    role: true,
                    status: true,
                    onboardingStatus: true,
                },
            });

            return {
                user: updatedUser,
                profile,
                company,
                kycApplication: {
                    id: kycApplication.id,
                    companyId: kycApplication.companyId,
                    status: kycApplication.status,
                    submittedAt: kycApplication.submittedAt,
                    rejectionReason: kycApplication.rejectionReason,
                    correctionRequired: kycApplication.correctionRequired,
                },
                location: {
                    state,
                    city,
                },
            };
        },
        {
            maxWait: 10000,
            timeout: 20000,
        }
    );

    console.log("COMPLETE PROFILE SERVICE RESULT:", result);

    return result;
};