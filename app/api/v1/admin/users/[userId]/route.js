import { getAdminUserDetailsController } from "@/controllers/admin/user.admin.controller";

export async function GET(req, context) {
    return await getAdminUserDetailsController(req, context);
}