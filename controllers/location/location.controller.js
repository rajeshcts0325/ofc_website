import { getStatesService, getCitiesService } from "@/services/location/location.service";

export const getStatesController = async () => {
    return await getStatesService();
};

export const getCitiesController = async (stateId) => {
    return await getCitiesService(stateId);
};