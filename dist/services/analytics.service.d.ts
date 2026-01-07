import type { DashboardWeeklyStats, DetailedDailyMetricsResponse, RealTimeStats } from "../types/analytics.types.js";
export declare const analyticsService: {
    getTwoWeekStats(): Promise<DashboardWeeklyStats>;
    getDetailedDailyMetrics(): Promise<DetailedDailyMetricsResponse>;
    getRealTimeStats(): Promise<RealTimeStats>;
};
export default analyticsService;
//# sourceMappingURL=analytics.service.d.ts.map