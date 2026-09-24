import { NextResponse } from "next/server";
import {
    getProductSubCategoryByIdController,
    updateProductSubCategoryController,
    deleteProductSubCategoryController,
} from "@/controllers/product/productSubCategory.controller";

export async function GET(req, context) {
    try {
        const { id } = await context.params;

        const result = await getProductSubCategoryByIdController(id);

        return NextResponse.json(
            {
                success: true,
                message: "Product sub category fetched successfully",
                data: result,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to fetch product sub category",
            },
            { status: error.statusCode || 500 }
        );
    }
}

export async function PUT(req, context) {
    try {
        const { id } = await context.params;
        const body = await req.json();

        const result = await updateProductSubCategoryController(id, body);

        return NextResponse.json(
            {
                success: true,
                message: "Product sub category updated successfully",
                data: result,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to update product sub category",
            },
            { status: error.statusCode || 500 }
        );
    }
}

export async function DELETE(req, context) {
    try {
        const { id } = await context.params;

        const result = await deleteProductSubCategoryController(id);

        return NextResponse.json(
            {
                success: true,
                message: result.message,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to delete product sub category",
            },
            { status: error.statusCode || 500 }
        );
    }
}