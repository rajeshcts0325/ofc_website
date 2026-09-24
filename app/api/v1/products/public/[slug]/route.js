import { NextResponse } from "next/server";
import { getPublicProductBySlugController } from "@/controllers/product/public-product.controller";

export async function GET(req, { params }) {
    try {
        const { slug } = await params;

        const product = await getPublicProductBySlugController(slug);

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