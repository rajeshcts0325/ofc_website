import { NextResponse } from "next/server";
import { getMeController } from "@/controllers/auth/auth.controller";

export async function GET(req) {
    try {
        const result = await getMeController(req);

        return NextResponse.json(
            {
                success: true,
                user: result.user,
                accessStatus: result.accessStatus,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Something went wrong",
            },
            { status: error.statusCode || 500 }
        );
    }
}