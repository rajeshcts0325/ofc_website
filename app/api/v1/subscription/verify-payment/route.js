import { NextResponse } from "next/server";
import { verifyPaymentController } from "@/controllers/subscription/subscription.controller";

export async function POST(req) {
  try {
    const body = await req.json();

    const result = await verifyPaymentController(body, req);

    return NextResponse.json(
      {
        success: true,
        message: "Payment verified successfully. Your profile is pending admin approval.",
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("VERIFY PAYMENT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Payment verification failed",
      },
      { status: error.statusCode || 400 }
    );
  }
}