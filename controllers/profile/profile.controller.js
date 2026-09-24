import { completeProfileService } from "@/services/profile/complete-profile.service";

export const completeProfileController = async (body, req) => {
    console.log("COMPLETE PROFILE CONTROLLER BODY:", body);
    return completeProfileService(body, req);
};