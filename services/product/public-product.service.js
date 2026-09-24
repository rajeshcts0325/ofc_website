import { prisma } from "@/lib/prisma";

export const getPublicProductBySlugService = async (slug) => {
    const product = await prisma.product.findFirst({
        where: {
            slug,
            status: "ACTIVE",
        },
        include: {
            category: true,
            subCategory: true,
            user: {
                select: {
                    id: true,
                    email: true,
                    role: true,
                },
            },
            company: true,
            state: true,
            city: true,
        },
    });

    if (!product) {
        const error = new Error("Product not found");
        error.statusCode = 404;
        throw error;
    }

    return product;
};