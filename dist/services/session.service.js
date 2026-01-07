import { sessionRepository } from "../repositories/session.repository.js";
import { setSession } from "../utils/redis.utils.js";
export const sessionService = {
    async createSession({ data }) {
        const session = await sessionRepository.create({
            ...data,
            startedAt: new Date(),
            lastSeenAt: new Date(),
        });
        await setSession(session.sessionId, {
            sessionId: session.sessionId,
            visitorId: session.visitorId || "",
            type: session.type,
            customerId: session.customerId || undefined,
            device: session.device || undefined,
        }, 30 * 60);
        return session;
    },
    async trackEvent(data) {
        return await sessionRepository.createEvent({
            eventType: data.eventType,
            page: data.page,
            productId: data.productId,
            metadata: data.metadata || {},
            sessionId: data.sessionId,
        });
    },
    async getAllSessions() {
        return sessionRepository.findAll();
    },
};
//# sourceMappingURL=session.service.js.map