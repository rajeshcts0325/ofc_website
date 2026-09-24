import { rejectVendorController } from "@/controllers/admin/vendor.admin.controller";

export async function PATCH(req, context) {
    return await rejectVendorController(req, context);
}