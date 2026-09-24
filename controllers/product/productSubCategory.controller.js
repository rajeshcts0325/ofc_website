import {
    createProductSubCategoryService,
    getProductSubCategoriesService,
    getProductSubCategoryByIdService,
    updateProductSubCategoryService,
    deleteProductSubCategoryService,
} from "@/services/product/productSubCategory.service";

export const createProductSubCategoryController = async (data) => {
    return await createProductSubCategoryService(data);
};

export const getProductSubCategoriesController = async (filters) => {
    return await getProductSubCategoriesService(filters);
};

export const getProductSubCategoryByIdController = async (id) => {
    return await getProductSubCategoryByIdService(id);
};

export const updateProductSubCategoryController = async (id, data) => {
    return await updateProductSubCategoryService(id, data);
};

export const deleteProductSubCategoryController = async (id) => {
    return await deleteProductSubCategoryService(id);
};