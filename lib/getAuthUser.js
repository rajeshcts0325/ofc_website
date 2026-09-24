// src/lib/getAuthUser.js

import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export const getAuthUser = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
        const error = new Error("Unauthorized");
        error.statusCode = 401;
        throw error;
    }

    try {
        const decoded = verifyToken(token);

        console.log("DECODED AUTH USER:", decoded);

        return decoded;
    } catch (error) {
        const err = new Error("Invalid or expired token");
        err.statusCode = 401;
        throw err;
    }
};