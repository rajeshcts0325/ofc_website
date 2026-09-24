import { NextResponse } from "next/server";
import { createSubscriptionController } from "@/controllers/subscription/subscription.controller";

export async function POST(req) {
  try {
    const result = await createSubscriptionController(req);

    return NextResponse.json(
      {
        success: true,
        message: "Subscription order created successfully",
        data: result,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("CREATE SUBSCRIPTION ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong",
      },
      { status: error.statusCode || 400 }
    );
  }
}