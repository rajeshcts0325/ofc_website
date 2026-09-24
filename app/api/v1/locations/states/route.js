import { NextResponse } from "next/server";
import { getStatesController } from "@/controllers/location/location.controller";

export async function GET() {
    try {
        const states = await getStatesController();

        return NextResponse.json(
            {
                success: true,
                data: states,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to fetch states",
            },
            { status: error.statusCode || 500 }
        );
    }
}