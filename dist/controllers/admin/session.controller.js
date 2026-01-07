import { sessionService } from "../../services/session.service.js";
import { successResponse } from "../../utils/response.js";
export const getSessions = async (req, res, next) => {
    const sessions = await sessionService.getAllSessions();
    res
        .status(200)
        .json(successResponse(sessions, "Sessions retrieved successfully"));
};
//# sourceMappingURL=session.controller.js.map