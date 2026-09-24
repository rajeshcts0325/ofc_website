import { NextResponse } from "next/server";
import {
    getProductByIdController,
    updateProductController,
    deleteProductController,
} from "@/controllers/product/product.controller";
import { getAuthUser } from "@/lib/getAuthUser";
import { supabaseAdmin } from "@/lib/supabase";

const uploadProductImage = async (file, userId) => {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExt}`;

    const filePath = `${userId}/${fileName}`;

    const { error } = await supabaseAdmin.storage
        .from(process.env.SUPABASE_PRODUCT_BUCKET)
        .upload(filePath, buffer, {
            contentType: file.type,
            upsert: false,
        });

    if (error) {
        throw new Error(error.message);
    }

    const { data } = supabaseAdmin.storage
        .from(process.env.SUPABASE_PRODUCT_BUCKET)
        .getPublicUrl(filePath);

    return {
        imageUrl: data.publicUrl,
        imagePublicId: filePath,
    };
};


export async function GET(req, { params }) {
    try {
        const { id } = await params;

        const product = await getProductByIdController(id);

        return NextResponse.json(
            {
                success: true,
                message: "Product fetched successfully",
                data: product,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to fetch product",
            },
            { status: error.statusCode || 500 }
        );
    }
}

export async function PATCH(req, { params }) {
    try {
        const authUser = await getAuthUser();
        const userId = authUser.id || authUser.userId;

        const { id } = await params;

        const existingProduct = await getProductByIdController(id);

        const formData = await req.formData();

        const imageFile = formData.get("image");

        let imageUrl;
        let imagePublicId;

        if (imageFile && imageFile.size > 0) {
            const uploadedImage = await uploadProductImage(imageFile, userId);

            imageUrl = uploadedImage.imageUrl;
            imagePublicId = uploadedImage.imagePublicId;

            if (existingProduct.imagePublicId) {
                await supabaseAdmin.storage
                    .from(process.env.SUPABASE_PRODUCT_BUCKET)
                    .remove([existingProduct.imagePublicId]);
            }
        }

        const body = {
            title: formData.get("title"),
            description: formData.get("description"),
            categoryId: formData.get("categoryId"),
            subCategoryId: formData.get("subCategoryId"),
            price: formData.get("price"),
            unit: formData.get("unit"),
            stock: formData.get("stock"),
            brand: formData.get("brand"),
            productModel: formData.get("productModel"),
            status: formData.get("status"),
        };

        if (imageUrl) {
            body.imageUrl = imageUrl;
            body.imagePublicId = imagePublicId;
        }

        const product = await updateProductController(id, body, authUser);

        return NextResponse.json(
            {
                success: true,
                message: "Product updated successfully",
                data: product,
            },
            { status: 200 }
        );
    } catch (error) {
        console.log("PRODUCT UPDATE ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to update product",
            },
            { status: error.statusCode || 500 }
        );
    }
}

export async function DELETE(req, { params }) {
    try {
        const { id } = await params;

        const existingProduct = await getProductByIdController(id);

        if (existingProduct.imagePublicId) {
            await supabaseAdmin.storage
                .from(process.env.SUPABASE_PRODUCT_BUCKET)
                .remove([existingProduct.imagePublicId]);
        }

        const result = await deleteProductController(id);

        return NextResponse.json(
            {
                success: true,
                message: result.message,
            },
            { status: 200 }
        );
    } catch (error) {
        console.log("PRODUCT DELETE ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to delete product",
            },
            { status: error.statusCode || 500 }
        );
    }
}