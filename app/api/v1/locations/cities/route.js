import { NextResponse } from "next/server";
import { getCitiesController } from "@/controllers/location/location.controller";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const stateId = searchParams.get("stateId");

        const cities = await getCitiesController(stateId);

        return NextResponse.json(
            {
                success: true,
                data: cities,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to fetch cities",
            },
            { status: error.statusCode || 500 }
        );
    }
}