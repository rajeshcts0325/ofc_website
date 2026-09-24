// app/api/auth/check/route.js

import { NextResponse } from "next/server";
import { authMiddleware } from "@/middleware/auth.middleware";

export async function GET() {
    try {
        const user = await authMiddleware();

        return NextResponse.json({
            success: true,
            message: "Authenticated",
            user,
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            {
                status: 401,
            }
        );
    }
}