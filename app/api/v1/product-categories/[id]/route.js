import { NextResponse } from "next/server";
import {
    getProductCategoryByIdController,
    updateProductCategoryController,
    deleteProductCategoryController,
} from "@/controllers/product/productCategory.controller";

export async function GET(req, context) {
    try {
        const { id } = await context.params;

        const category = await getProductCategoryByIdController(id);

        return NextResponse.json(
            {
                success: true,
                message: "Product category fetched successfully",
                data: category,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to fetch product category",
            },
            { status: error.statusCode || 500 }
        );
    }
}

export async function PUT(req, context) {
    try {
        const { id } = await context.params;
        const body = await req.json();

        const category = await updateProductCategoryController(id, body);

        return NextResponse.json(
            {
                success: true,
                message: "Product category updated successfully",
                data: category,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to update product category",
            },
            { status: error.statusCode || 500 }
        );
    }
}

export async function DELETE(req, context) {
    try {
        const { id } = await context.params;

        const result = await deleteProductCategoryController(id);

        return NextResponse.json(
            {
                success: true,
                message: result.message || "Product category deleted successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to delete product category",
            },
            { status: error.statusCode || 500 }
        );
    }
}