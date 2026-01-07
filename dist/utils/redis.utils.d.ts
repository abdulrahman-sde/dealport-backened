import { redis } from "../config/redis.js";
export { redis };
import type { RedisSessionData } from "../types/session.types.js";
import type { DashboardWeeklyStats } from "../types/analytics.types.js";
export declare function getSession(sessionId: string): Promise<RedisSessionData | null>;
export declare function setSession(sessionId: string, data: RedisSessionData, ttl: number): Promise<void>;
export declare function deleteSession(sessionId: string): Promise<void>;
export declare function updateSessionActivity(sessionId: string): Promise<void>;
export declare function getWeeklyStats(dateKey: string): Promise<DashboardWeeklyStats | null>;
export declare function setWeeklyStats(dateKey: string, data: DashboardWeeklyStats, ttl?: number): Promise<void>;
//# sourceMappingURL=redis.utils.d.ts.map