import { NextResponse } from "next/server";
import { ZodError } from "zod";
import {
    createLeadController,
    getLeadsController,
} from "@/controllers/lead/lead.controller";
import { authMiddleware } from "@/middleware/auth.middleware";





export async function POST(req) {
    try {
        const body = await req.json();
        const lead = await createLeadController(body, req);

        return NextResponse.json(
            {
                success: true,
                message: "Lead submitted successfully",
                lead,
            },
            {
                status: 201,
            },
        );
    } catch (error) {
        console.log("CREATE LEAD ERROR:", error);

        if (error instanceof ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    message: error.issues[0].message,
                },
                {
                    status: 400,
                },
            );
        }

        return NextResponse.json(
            {
                success: false,
                message: error?.message || "Something went wrong",
            },
            {
                status: 400,
            },
        );
    }
}



export async function GET(req) {
    try {
        const user = await authMiddleware(req);

        const result = await getLeadsController(req, user);

        return NextResponse.json(
            {
                success: true,
                message: "Leads fetched successfully",
                ...result,
            },
            { status: 200 }
        );
    } catch (error) {
        console.log("GET LEADS ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: error?.message || "Something went wrong",
            },
            { status: error?.statusCode || 500 }
        );
    }
}