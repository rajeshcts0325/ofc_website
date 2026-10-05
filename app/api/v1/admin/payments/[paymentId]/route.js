import { NextResponse } from "next/server";

import {
  getAdminPaymentByIdController,
} from "@/controllers/admin/payment/admin-payment.controller";

export async function GET(req, { params }) {
  try {
    const { paymentId } = await params;

    const result = await getAdminPaymentByIdController(
      req,
      paymentId
    );

    return NextResponse.json(
      {
        success: true,
        message: "Payment details fetched successfully",
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("ADMIN PAYMENT DETAILS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Unable to fetch payment details",
      },
      {
        status: error.statusCode || 500,
      }
    );
  }
}