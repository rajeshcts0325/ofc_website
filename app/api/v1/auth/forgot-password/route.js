import { NextResponse } from "next/server";
import { forgotPasswordController } from "@/controllers/auth/password-reset.controller";

export async function POST(req) {
    try {
        const body = await req.json();

        const result = await forgotPasswordController(body);

        return NextResponse.json({
            success: true,
            message: result.message,
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Something went wrong",
            },
            {
                status: error.statusCode || 500,
            }
        );
    }
}