import { NextResponse } from "next/server";
import {
    createProductSubCategoryController,
    getProductSubCategoriesController,
} from "@/controllers/product/productSubCategory.controller";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);

        const filters = {
            categoryId: searchParams.get("categoryId"),
        };

        const result =
            await getProductSubCategoriesController(filters);

        return NextResponse.json(
            {
                success: true,
                message:
                    "Product sub categories fetched successfully",
                data: result,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message:
                    error.message ||
                    "Failed to fetch product sub categories",
            },
            { status: error.statusCode || 500 }
        );
    }
}

export async function POST(req) {
    try {
        const body = await req.json();

        const subCategory =
            await createProductSubCategoryController(
                body
            );

        return NextResponse.json(
            {
                success: true,
                message:
                    "Product sub category created successfully",
                data: subCategory,
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message:
                    error.message ||
                    "Failed to create product sub category",
            },
            { status: error.statusCode || 500 }
        );
    }
}