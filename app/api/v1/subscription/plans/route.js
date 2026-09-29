import { NextResponse } from "next/server";
import { getPlansController } from "@/controllers/subscription/subscription.controller";

export async function GET() {
  try {
    const result = await getPlansController();

    return NextResponse.json({
      success: true,
      message: "Plans fetched successfully",
      data: result,
    });
  } catch (error) {
    console.log("GET PLANS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong",
      },
      { status: error.statusCode || 500 }
    );
  }
}