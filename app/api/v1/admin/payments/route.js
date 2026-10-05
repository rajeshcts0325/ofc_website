import { NextResponse } from "next/server";

import {
  getAdminPaymentLogsController,
} from "@/controllers/admin/payment/admin-payment.controller";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const query = {
      page: searchParams.get("page") || "1",
      limit: searchParams.get("limit") || "10",
      search: searchParams.get("search") || "",
      status: searchParams.get("status") || "",
    };

    const result = await getAdminPaymentLogsController(req, query);

    return NextResponse.json(
      {
        success: true,
        message: "Payment logs fetched successfully",
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("ADMIN PAYMENT LOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Unable to fetch payment logs",
      },
      {
        status: error.statusCode || 500,
      }
    );
  }
}