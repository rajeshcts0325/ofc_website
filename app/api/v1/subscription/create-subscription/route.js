import { NextResponse } from "next/server";
import { createSubscriptionController } from "@/controllers/subscription/subscription.controller";

export async function POST(req) {
    try {
        const body = await req.json().catch(() => ({}));
        const result = await createSubscriptionController(req, body);

        return NextResponse.json(
            {
                success: true,
                message: "Subscription created successfully",
                data: result,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("CREATE SUBSCRIPTION ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: error.message || "Something went wrong",
            },
            { status: error.statusCode || 500 }
        );
    }
}

