import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export const authMiddleware = async () => {
    try {
        const cookieStore = await cookies();

        const token = cookieStore.get("auth_token")?.value;

        if (!token) {
            throw new Error("Unauthorized");
        }

        const decoded = verifyToken(token);

        return decoded;
    } catch (error) {
        throw new Error("Invalid or expired token");
    }
};