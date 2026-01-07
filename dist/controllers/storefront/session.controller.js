import { sessionService } from "../../services/session.service.js";
import { CreateSessionEventSchema } from "../../validators/session.validator.js";
import { successResponse } from "../../utils/response.js";
export const createSessionEvent = async (req, res, next) => {
    const validatedData = CreateSessionEventSchema.parse({
        ...req.body,
        sessionId: req.session?.sessionId,
    });
    const event = await sessionService.trackEvent(validatedData);
    res
        .status(200)
        .json(successResponse(event, "Session event tracked successfully"));
};
//# sourceMappingURL=session.controller.js.map