import type { DailyMetrics } from "@prisma/client";
import type { CustomerOverviewMetric, ReportMetric } from "../types/analytics.types.js";
export declare const formatCustomerOverviewMetrics: (metrics: DailyMetrics[]) => CustomerOverviewMetric[];
export declare const formatReportMetrics: (metrics: DailyMetrics[]) => ReportMetric[];
//# sourceMappingURL=analytics.utils.d.ts.map