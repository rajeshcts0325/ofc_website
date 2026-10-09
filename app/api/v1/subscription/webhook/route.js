import { NextResponse } from "next/server";
import { razorpayWebhookController } from "@/controllers/subscription/subscription.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
    try {
        // RAW body: the signature is computed over the exact bytes Razorpay sent
        const rawBody = await req.text();
        const result = await razorpayWebhookController(rawBody, req.headers);

        return NextResponse.json({ success: true, data: result }, { status: 200 });
    } catch (error) {
        console.error("RAZORPAY WEBHOOK ERROR:", error);

        return NextResponse.json(
            { success: false, message: error.message || "Webhook failed" },
            { status: error.statusCode || 500 }
        );
    }
}