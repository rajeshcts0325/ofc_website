import {
    getAdminUsersService,
    getAdminUserDetailsService,
} from "@/services/admin/user.admin.service";

export const getAdminUsersController = async (req) => {
    try {
        const { searchParams } = new URL(req.url);

        const result = await getAdminUsersService(searchParams);

        return Response.json(
            {
                success: true,
                data: result.users,
                pagination: result.pagination,
            },
            { status: 200 }
        );
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: error.message || "Something went wrong",
            },
            {
                status: error.statusCode || 500,
            }
        );
    }
};

export const getAdminUserDetailsController = async (req, context) => {
    try {
        const { userId } = await context.params;

        const result = await getAdminUserDetailsService(userId);

        return Response.json(
            {
                success: true,
                data: result.user,
                timeline: result.timeline,
            },
            { status: 200 }
        );
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: error.message || "Something went wrong",
            },
            {
                status: error.statusCode || 500,
            }
        );
    }
};