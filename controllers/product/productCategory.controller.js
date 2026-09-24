import {
    createProductCategoryService,
    getProductCategoriesService,
    getProductCategoryByIdService,
    updateProductCategoryService,
    deleteProductCategoryService,
} from "@/services/product/productCategory.service";

export const createProductCategoryController = async (data) => {
    return await createProductCategoryService(data);
};

export const getProductCategoriesController = async () => {
    return await getProductCategoriesService();
};

export const getProductCategoryByIdController = async (id) => {
    return await getProductCategoryByIdService(id);
};

export const updateProductCategoryController = async (id, data) => {
    return await updateProductCategoryService(id, data);
};

export const deleteProductCategoryController = async (id) => {
    return await deleteProductCategoryService(id);
};