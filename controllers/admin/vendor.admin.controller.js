import {
    getPendingVendorsService,
    approveVendorService,
    rejectVendorService,
} from "@/services/admin/vendor.admin.service";

export const getPendingVendorsController = async () => {
    try {
        const vendors = await getPendingVendorsService();

        return Response.json({
            success: true,
            vendors,
        });
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: error.message,
            },
            {
                status: error.statusCode || 500,
            }
        );
    }
};

export const approveVendorController = async (req, context) => {
    try {
        const { userId } = await context.params;

        const result = await approveVendorService(userId);

        return Response.json({
            success: true,
            message: "Vendor approved successfully",
            data: result,
        });
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: error.message,
            },
            {
                status: error.statusCode || 500,
            }
        );
    }
};

export const rejectVendorController = async (req, context) => {
    try {
        const { userId } = await context.params;

        const body = await req.json();

        const result = await rejectVendorService(userId, body);

        return Response.json({
            success: true,
            message: "Vendor rejected successfully",
            data: result,
        });
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: error.message,
            },
            {
                status: error.statusCode || 500,
            }
        );
    }
};