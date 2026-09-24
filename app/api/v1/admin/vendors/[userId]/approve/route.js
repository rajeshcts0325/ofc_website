import { approveVendorController } from "@/controllers/admin/vendor.admin.controller";

export async function PATCH(req, context) {
    return await approveVendorController(req, context);
}