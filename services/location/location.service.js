import { prisma } from "@/lib/prisma";

export const getStatesService = async () => {
    const states = await prisma.state.findMany({
        orderBy: {
            name: "asc",
        },
        select: {
            id: true,
            name: true,
            slug: true,
        },
    });

    return states;
};



export const getCitiesService = async (stateId) => {
    if (!stateId) {
        const error = new Error("stateId is required");
        error.statusCode = 400;
        throw error;
    }

    return await prisma.city.findMany({
        where: {
            stateId,
        },
        orderBy: {
            name: "asc",
        },
        select: {
            id: true,
            name: true,
            slug: true,
            stateId: true,
        },
    });
};