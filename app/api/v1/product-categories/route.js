import { NextResponse } from "next/server";
import {
    createProductCategoryController,
    getProductCategoriesController,
} from "@/controllers/product/productCategory.controller";

export async function GET(req) {
    try {
        const result = await getProductCategoriesController();

        return NextResponse.json(
            {
                success: true,
                message: "Product categories fetched successfully",
                data: result,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to fetch product categories",
            },
            { status: error.statusCode || 500 }
        );
    }
}

export async function POST(req) {
    try {
        const body = await req.json();

        const category = await createProductCategoryController(body);

        return NextResponse.json(
            {
                success: true,
                message: "Product category created successfully",
                data: category,
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to create product category",
            },
            { status: error.statusCode || 500 }
        );
    }
}