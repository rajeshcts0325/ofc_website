import { prisma } from "@/lib/prisma";

const generateSlug = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
};

export const createProductCategoryService = async (data) => {
    const { name } = data;

    if (!name) {
        const error = new Error("Category name is required");
        error.statusCode = 400;
        throw error;
    }

    const slug = generateSlug(name);

    const existingCategory = await prisma.productCategory.findUnique({
        where: { slug },
    });

    if (existingCategory) {
        const error = new Error("Category already exists");
        error.statusCode = 409;
        throw error;
    }

    return await prisma.productCategory.create({
        data: {
            name,
            slug,
        },
    });
};

export const getProductCategoriesService = async () => {
    return await prisma.productCategory.findMany({
        orderBy: {
            createdAt: "desc",
        },
        include: {
            subCategories: {
                orderBy: {
                    name: "asc",
                },
            },
        },
    });
};

export const getProductCategoryByIdService = async (id) => {
    if (!id) {
        const error = new Error("Category id is required");
        error.statusCode = 400;
        throw error;
    }

    const category = await prisma.productCategory.findUnique({
        where: { id },
        include: {
            subCategories: {
                orderBy: {
                    name: "asc",
                },
            },
        },
    });

    if (!category) {
        const error = new Error("Category not found");
        error.statusCode = 404;
        throw error;
    }

    return category;
};

export const updateProductCategoryService = async (id, data) => {
    if (!id) {
        const error = new Error("Category id is required");
        error.statusCode = 400;
        throw error;
    }

    const existingCategory = await prisma.productCategory.findUnique({
        where: { id },
    });

    if (!existingCategory) {
        const error = new Error("Category not found");
        error.statusCode = 404;
        throw error;
    }

    const updateData = { ...data };

    if (data.name && data.name !== existingCategory.name) {
        const slug = generateSlug(data.name);

        const duplicateCategory = await prisma.productCategory.findFirst({
            where: {
                slug,
                NOT: {
                    id,
                },
            },
        });

        if (duplicateCategory) {
            const error = new Error("Category already exists");
            error.statusCode = 409;
            throw error;
        }

        updateData.slug = slug;
    }

    return await prisma.productCategory.update({
        where: { id },
        data: updateData,
    });
};

export const deleteProductCategoryService = async (id) => {
    if (!id) {
        const error = new Error("Category id is required");
        error.statusCode = 400;
        throw error;
    }

    const existingCategory = await prisma.productCategory.findUnique({
        where: { id },
    });

    if (!existingCategory) {
        const error = new Error("Category not found");
        error.statusCode = 404;
        throw error;
    }

    await prisma.productCategory.delete({
        where: { id },
    });

    return {
        message: "Category deleted successfully",
    };
};