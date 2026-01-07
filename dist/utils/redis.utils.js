import { redis } from "../config/redis.js";
export { redis };
export async function getSession(sessionId) {
    const data = await redis.get(`session:${sessionId}`);
    if (typeof data === "string")
        return JSON.parse(data);
    return null;
}
export async function setSession(sessionId, data, ttl) {
    await redis.set(`session:${sessionId}`, JSON.stringify(data), { ex: ttl });
}
export async function deleteSession(sessionId) {
    await redis.del(`session:${sessionId}`);
}
export async function updateSessionActivity(sessionId) {
    await redis.expire(`session:${sessionId}`, 30 * 60);
}
export async function getWeeklyStats(dateKey) {
    const data = await redis.get(`analytics:weekly-stats:${dateKey}`);
    if (typeof data === "string")
        return JSON.parse(data);
    return data;
}
export async function setWeeklyStats(dateKey, data, ttl = 3600 // Default 1 hour
) {
    await redis.set(`analytics:weekly-stats:${dateKey}`, JSON.stringify(data), {
        ex: ttl,
    });
}
//# sourceMappingURL=redis.utils.js.map