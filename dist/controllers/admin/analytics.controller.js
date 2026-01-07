import { analyticsService } from "../../services/analytics.service.js";
import { successResponse } from "../../utils/response.js";
export const getTwoWeekStats = async (_req, res) => {
    const stats = await analyticsService.getTwoWeekStats();
    res.json(successResponse(stats, "Two week stats fetched successfully"));
};
export const getDetailedDailyMetrics = async (_req, res) => {
    const metrics = await analyticsService.getDetailedDailyMetrics();
    res.json(successResponse(metrics, "Detailed daily metrics fetched successfully"));
};
export const getTopProducts = async (_req, res) => { };
export const getRealTimeStats = async (_req, res) => {
    const metrics = await analyticsService.getRealTimeStats();
    res.json(successResponse(metrics, "Real-time metrics fetched successfully"));
};
//# sourceMappingURL=analytics.controller.js.map