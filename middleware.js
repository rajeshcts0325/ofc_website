// middleware.js

import { NextResponse } from "next/server";
import { verifyEdgeToken } from "@/lib/jwt";

export async function middleware(req) {
    const token = req.cookies.get("auth_token")?.value;
    const isDashboardRoute =
        req.nextUrl.pathname.startsWith("/dashboard");

    if (isDashboardRoute) {
        // NO TOKEN
        if (!token) {
            return NextResponse.redirect(
                new URL("/login", req.url)
            );
        }

        try {
            // VERIFY TOKEN     
            await verifyEdgeToken(token);

        } catch (error) {
            console.log(
                "MIDDLEWARE VERIFY ERROR:",
                error.message
            );

            return NextResponse.redirect(
                new URL("/login", req.url)
            );
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};