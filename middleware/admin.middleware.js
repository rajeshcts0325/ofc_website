import { prisma } from "@/lib/prisma";
import { authMiddleware } from "@/middleware/auth.middleware";

export const adminMiddleware = async () => {
    const authUser = await authMiddleware();

    if (!authUser?.id) {
        const error = new Error("Unauthorized");
        error.statusCode = 401;
        throw error;
    }

    const admin = await prisma.user.findUnique({
        where: {
            id: authUser.id,
        },
        select: {
            id: true,
            email: true,
            role: true,
            status: true,
        },
    });

    if (!admin) {
        const error = new Error("Admin not found");
        error.statusCode = 404;
        throw error;
    }

    if (admin.role !== "ADMIN") {
        const error = new Error("Access denied. Admin only.");
        error.statusCode = 403;
        throw error;
    }

    if (admin.status !== "ACTIVE") {
        const error = new Error("Admin account is suspended");
        error.statusCode = 403;
        throw error;
    }

    return admin;
};