import {
    createProductService,
    getProductsService,
    getProductByIdService,
    updateProductService,
    deleteProductService,
} from "@/services/product/product.service";

export const createProductController = async (data) => {
    return await createProductService(data);
};

export const getProductsController = async (filters) => {
    return await getProductsService(filters);
};

export const getProductByIdController = async (id) => {
    return await getProductByIdService(id);
};

export const updateProductController = async (id, data) => {
    return await updateProductService(id, data);
};

export const deleteProductController = async (id) => {
    return await deleteProductService(id);
};