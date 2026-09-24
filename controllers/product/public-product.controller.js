import { getPublicProductBySlugService } from "@/services/product/public-product.service";

export const getPublicProductBySlugController = async (slug) => {
    return await getPublicProductBySlugService(slug);
};