import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { completeProfileController } from "@/controllers/profile/profile.controller";

export async function PATCH(req) {
    try {
        const body = await req.json();

        console.log("COMPLETE PROFILE BODY:", body);

        const result = await completeProfileController(body, req);

        return NextResponse.json(
            {
                success: true,
                message: "Business profile completed successfully",
                data: result,
            },
            { status: 200 }
        );
    } catch (error) {
        console.log("COMPLETE PROFILE ERROR:", error);

        if (error instanceof ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    message: error.issues[0].message,
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: false,
                message: error.message || "Something went wrong",
            },
            { status: error.statusCode || 400 }
        );
    }
}


