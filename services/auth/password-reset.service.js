import crypto from "crypto";
import validator from "validator";
import { sendPasswordResetEmail } from "@/lib/mail";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/bcrypt";

import {
    forgotPasswordSchema,
    resetPasswordSchema,
} from "@/validations/password-reset.validation";

export const forgotPasswordService = async (body) => {
    const validatedData = forgotPasswordSchema.parse(body);

    console.log("BODY:", body);
    console.log("VALIDATED DATA:", validatedData);

    const email = validatedData.email.toLowerCase().trim();

    console.log("Received forgot password request for email:", email);

    const genericResponse = {
        message: "If this email exists, reset instructions have been sent.",
    };


    const user = await prisma.user.findUnique({
        where: {
            email,
        },
        select: {
            id: true,
            email: true,
        },
    });

    console.log("User lookup result:", user);

    if (!user) {
        return genericResponse;
    }

    const rawToken = crypto.randomBytes(32).toString("hex");

    const tokenHash = crypto
        .createHash("sha256")
        .update(rawToken)
        .digest("hex");


    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await prisma.passwordResetToken.deleteMany({
        where: {
            userId: user.id,
            usedAt: null,
        },
    });

    await prisma.passwordResetToken.create({
        data: {
            userId: user.id,
            tokenHash,
            expiresAt,
        },
    });

    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${rawToken}`;

    await sendPasswordResetEmail({
        to: user.email,
        resetUrl,
    });

    return genericResponse;
};

export const resetPasswordService = async (body) => {
    const validatedData = resetPasswordSchema.parse(body);

    const tokenHash = crypto
        .createHash("sha256")
        .update(validatedData.token)
        .digest("hex");

    const resetToken = await prisma.passwordResetToken.findUnique({
        where: {
            tokenHash,
        },
        include: {
            user: true,
        },
    });

    if (!resetToken) {
        const error = new Error("Invalid or expired reset token");
        error.statusCode = 400;
        throw error;
    }

    if (resetToken.usedAt) {
        const error = new Error("Reset token already used");
        error.statusCode = 400;
        throw error;
    }

    if (resetToken.expiresAt < new Date()) {
        const error = new Error("Reset token has expired");
        error.statusCode = 400;
        throw error;
    }

    const hashedPassword = await hashPassword(validatedData.password);

    await prisma.$transaction(async (tx) => {
        await tx.user.update({
            where: {
                id: resetToken.userId,
            },
            data: {
                password: hashedPassword,
            },
        });

        await tx.passwordResetToken.update({
            where: {
                id: resetToken.id,
            },
            data: {
                usedAt: new Date(),
            },
        });
    });

    return {
        message: "Password reset successfully. Please login.",
    };
};