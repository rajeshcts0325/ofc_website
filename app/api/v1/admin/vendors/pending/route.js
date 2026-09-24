import { getPendingVendorsController } from "@/controllers/admin/vendor.admin.controller";

export async function GET() {
    return await getPendingVendorsController();
}