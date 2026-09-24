import { NextResponse } from "next/server";
import {
    createProductController,
    getProductsController,
} from "@/controllers/product/product.controller";
import { getAuthUser } from "@/lib/getAuthUser";
import { supabaseAdmin } from "@/lib/supabase";
import { prisma } from "@/lib/prisma";


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



export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);

        const filters = {
            page: searchParams.get("page") || 1,
            limit: searchParams.get("limit") || 10,
            status: searchParams.get("status"),
            categoryId: searchParams.get("categoryId"),
    subCategoryId: searchParams.get("subCategoryId"),
            stateId: searchParams.get("stateId"),
            cityId: searchParams.get("cityId"),
            userId: searchParams.get("userId"),
            companyId: searchParams.get("companyId"),
            search: searchParams.get("search"),
        };

        const result = await getProductsController(filters);

        return NextResponse.json(
            {
                success: true,
                message: "Products fetched successfully",
                data: result.products,
                pagination: result.pagination,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to fetch products",
            },
            { status: error.statusCode || 500 }
        );
    }
}

export async function POST(req) {
    try {
        const authUser = await getAuthUser();
        const userId = authUser.id || authUser.userId;

        const company = await prisma.company.findUnique({
            where: {
                userId,
            },
            select: {
                id: true,
                stateId: true,
                cityId: true,
            },
        });

        console.log("The company details is :", company)

        const formData = await req.formData();

        const imageFile = formData.get("image");

        let imageUrl = null;
        let imagePublicId = null;

        // console.log("IMAGE FILE:", imageFile);
        // console.log("IMAGE NAME:", imageFile?.name);
        // console.log("IMAGE SIZE:", imageFile?.size);

        if (imageFile && imageFile.size > 0) {
            const uploadedImage = await uploadProductImage(imageFile, userId);

            imageUrl = uploadedImage.imageUrl;
            imagePublicId = uploadedImage.imagePublicId;
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
            status: formData.get("status") || "DRAFT",
            companyId: company?.id || null,
            stateId: company?.stateId || null,
            cityId: company?.cityId || null,
            imageUrl,
            imagePublicId,

            userId,
        };



        const product = await createProductController(body);

        return NextResponse.json(
            {
                success: true,
                message: "Product created successfully",
                data: product,
            },
            { status: 201 }
        );
    } catch (error) {
        console.log("PRODUCT CREATE ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to create product",
            },
            { status: error.statusCode || 500 }
        );
    }
}