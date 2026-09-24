import { NextResponse } from "next/server";
import { resetPasswordController } from "@/controllers/auth/password-reset.controller";

export async function POST(req) {
    try {
        const body = await req.json();

        const result = await resetPasswordController(body);

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