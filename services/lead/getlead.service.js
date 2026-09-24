import { prisma } from "@/lib/prisma";

const allowedStatuses = [
    "NEW",
    "CONTACTED",
    "IN_PROGRESS",
    "CLOSED",
    "REJECTED",
];

const allowedPriorities = ["LOW", "MEDIUM", "HIGH", "URGENT"];

const allowedFormTypes = [
    "CONTACT",
    "ENQUIRY",
    "MATERIAL_INQUIRY",
    "EQUIPMENT_RENTAL",
    "INSURANCE",
    "FINANCE",
    "SERVICE_REQUEST",
    "GENERAL",
];

export const getLeadsService = async (req, user) => {
    if (!user) {
        const error = new Error("Unauthorized");
        error.statusCode = 401;
        throw error;
    }

    const { searchParams } = new URL(req.url);

    const page = Math.max(Number(searchParams.get("page")) || 1, 1);
    const limit = Math.min(Number(searchParams.get("limit")) || 10, 100);
    const skip = (page - 1) * limit;

    const status = searchParams.get("status");
    const priority = searchParams.get("priority");
    const formType = searchParams.get("formType");
    const search = searchParams.get("search");
    const assignedToId = searchParams.get("assignedToId");

    const fromDate = searchParams.get("fromDate");
    const toDate = searchParams.get("toDate");

    const sortBy = searchParams.get("sortBy") || "createdAt";
    const sortOrder = searchParams.get("sortOrder") === "asc" ? "asc" : "desc";

    const allowedSortFields = ["createdAt", "updatedAt", "name", "status", "priority"];

    const where = {};

    // Role based access
    if (user.role !== "ADMIN") {
        where.assignedToId = user.id;
    }

    // Admin can filter by assigned user
    if (user.role === "ADMIN" && assignedToId) {
        where.assignedToId = assignedToId;
    }

    if (status && allowedStatuses.includes(status)) {
        where.status = status;
    }

    if (priority && allowedPriorities.includes(priority)) {
        where.priority = priority;
    }

    if (formType && allowedFormTypes.includes(formType)) {
        where.formType = formType;
    }

    if (fromDate || toDate) {
        where.createdAt = {};

        if (fromDate) {
            where.createdAt.gte = new Date(fromDate);
        }

        if (toDate) {
            where.createdAt.lte = new Date(toDate);
        }
    }

    if (search) {
        where.OR = [
            {
                name: {
                    contains: search,
                    mode: "insensitive",
                },
            },
            {
                email: {
                    contains: search,
                    mode: "insensitive",
                },
            },
            {
                phone: {
                    contains: search,
                    mode: "insensitive",
                },
            },
            {
                subject: {
                    contains: search,
                    mode: "insensitive",
                },
            },
            {
                message: {
                    contains: search,
                    mode: "insensitive",
                },
            },
        ];
    }

    const [leads, total] = await Promise.all([
        prisma.lead.findMany({
            where,
            skip,
            take: limit,
            orderBy: {
                [allowedSortFields.includes(sortBy) ? sortBy : "createdAt"]: sortOrder,
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                subject: true,
                message: true,

                formType: true,
                status: true,
                priority: true,

                sourcePage: true,
                sourceWebsite: true,

                adminNotes: true,
                createdAt: true,
                updatedAt: true,

                assignedTo: {
                    select: {
                        id: true,
                        email: true,
                        role: true,
                        profile: {
                            select: {
                                fullName: true,
                                phone: true,
                            },
                        },
                        company: {
                            select: {
                                name: true,
                                category: true,
                                city: true,
                                state: true,
                            },
                        },
                    },
                },
            },
        }),

        prisma.lead.count({ where }),
    ]);

    return {
        data: leads,
        pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            hasNextPage: page * limit < total,
            hasPrevPage: page > 1,
        },
        filters: {
            status,
            priority,
            formType,
            search,
            assignedToId: user.role === "ADMIN" ? assignedToId : user.id,
            fromDate,
            toDate,
            sortBy,
            sortOrder,
        },
    };
};