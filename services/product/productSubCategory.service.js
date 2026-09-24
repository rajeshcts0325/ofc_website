import { prisma } from "@/lib/prisma";

const generateSlug = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
};

export const createProductSubCategoryService = async (data) => {
    const { categoryId, name } = data;

    if (!categoryId) {
        const error = new Error("Category is required");
        error.statusCode = 400;
        throw error;
    }

    if (!name) {
        const error = new Error("Sub category name is required");
        error.statusCode = 400;
        throw error;
    }

    const category = await prisma.productCategory.findUnique({
        where: { id: categoryId },
    });

    if (!category) {
        const error = new Error("Category not found");
        error.statusCode = 404;
        throw error;
    }

    const slug = generateSlug(name);

    const existingSubCategory = await prisma.productSubCategory.findFirst({
        where: {
            categoryId,
            slug,
        },
    });

    if (existingSubCategory) {
        const error = new Error("Sub category already exists in this category");
        error.statusCode = 409;
        throw error;
    }

    return await prisma.productSubCategory.create({
        data: {
            categoryId,
            name,
            slug,
        },
    });
};

export const getProductSubCategoriesService = async (filters = {}) => {
    const { categoryId } = filters;

    const where = {};

    if (categoryId) where.categoryId = categoryId;

    return await prisma.productSubCategory.findMany({
        where,
        orderBy: {
            name: "asc",
        },
        include: {
            category: true,
        },
    });
};

export const getProductSubCategoryByIdService = async (id) => {
    if (!id) {
        const error = new Error("Sub category id is required");
        error.statusCode = 400;
        throw error;
    }

    const subCategory = await prisma.productSubCategory.findUnique({
        where: { id },
        include: {
            category: true,
        },
    });

    if (!subCategory) {
        const error = new Error("Sub category not found");
        error.statusCode = 404;
        throw error;
    }

    return subCategory;
};

export const updateProductSubCategoryService = async (id, data) => {
    if (!id) {
        const error = new Error("Sub category id is required");
        error.statusCode = 400;
        throw error;
    }

    const existingSubCategory = await prisma.productSubCategory.findUnique({
        where: { id },
    });

    if (!existingSubCategory) {
        const error = new Error("Sub category not found");
        error.statusCode = 404;
        throw error;
    }

    const updateData = { ...data };

    if (data.name && data.name !== existingSubCategory.name) {
        const slug = generateSlug(data.name);

        const duplicateSubCategory = await prisma.productSubCategory.findFirst({
            where: {
                slug,
                categoryId: data.categoryId || existingSubCategory.categoryId,
                NOT: {
                    id,
                },
            },
        });

        if (duplicateSubCategory) {
            const error = new Error("Sub category already exists in this category");
            error.statusCode = 409;
            throw error;
        }

        updateData.slug = slug;
    }

    return await prisma.productSubCategory.update({
        where: { id },
        data: updateData,
    });
};

export const deleteProductSubCategoryService = async (id) => {
    if (!id) {
        const error = new Error("Sub category id is required");
        error.statusCode = 400;
        throw error;
    }

    const existingSubCategory = await prisma.productSubCategory.findUnique({
        where: { id },
    });

    if (!existingSubCategory) {
        const error = new Error("Sub category not found");
        error.statusCode = 404;
        throw error;
    }

    await prisma.productSubCategory.delete({
        where: { id },
    });

    return {
        message: "Sub category deleted successfully",
    };
};