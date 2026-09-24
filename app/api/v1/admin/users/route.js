import { getAdminUsersController } from "@/controllers/admin/user.admin.controller";

export async function GET(req) {
    return await getAdminUsersController(req);
}