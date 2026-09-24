import { createLeadService } from "@/services/lead/lead.service";
import { getLeadsService } from "@/services/lead/getlead.service";

export const createLeadController = async (body, req) => {
    return createLeadService(body, req);
};


export const getLeadsController = async (req, user) => {
    return getLeadsService(req, user);
};