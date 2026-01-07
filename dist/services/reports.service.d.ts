import type { DailyMetrics } from "@prisma/client";
export declare const reportsService: {
    getReportsData(startDate?: string, endDate?: string): Promise<{
        customerGrowthData: {
            month: string;
            newCustomers: number;
            returningCustomers: number;
        }[];
        keyMetrics: {
            returningUsers: {
                value: string;
                change: number;
                isPositive: boolean;
            };
            newUsers: {
                value: string;
                change: number;
                isPositive: boolean;
            };
            totalVisits: {
                value: string;
                change: number;
                isPositive: boolean;
            };
            uniqueVisits: {
                value: string;
                change: number;
                isPositive: boolean;
            };
        };
        salesGoal: {
            percentage: number;
            soldFor: number;
            monthGoal: number;
            left: number;
        };
        conversionRate: {
            percentage: number;
            cart: number;
            checkout: number;
            purchase: number;
        };
        avgOrderValue: {
            thisMonth: number;
            prevMonth: number;
            trend: {
                time: string | undefined;
                value: number;
            }[];
        };
    } | null>;
    getCustomerDemographics(): Promise<{
        totalCustomers: number;
        demographics: {
            country: string;
            sales: number;
        }[];
    }>;
    getTopCustomers(limit?: number): Promise<{
        id: string;
        name: string;
        email: string;
        avatar: undefined;
        orders: number;
        spent: number;
    }[]>;
    getTopProducts(limit?: number): Promise<{
        id: string;
        name: string;
        image: string | null;
        clicks: number;
        unitsSold: number;
        category: string;
    }[]>;
    getActiveSessions(): Promise<{
        activeUsers: number;
        deviceBreakdown: Record<string, number>;
    }>;
    getDeviceAnalytics(startDate?: string, endDate?: string): Promise<{
        devices: {
            device: string;
            count: number;
            percentage: number;
        }[];
        total: number;
    }>;
    formatFilteredReportsData(current: DailyMetrics[], from: Date, to: Date): Promise<{
        customerGrowthData: {
            month: string;
            newCustomers: number;
            returningCustomers: number;
        }[];
        keyMetrics: {
            returningUsers: {
                value: string;
                change: number;
                isPositive: boolean;
            };
            newUsers: {
                value: string;
                change: number;
                isPositive: boolean;
            };
            totalVisits: {
                value: string;
                change: number;
                isPositive: boolean;
            };
            uniqueVisits: {
                value: string;
                change: number;
                isPositive: boolean;
            };
        };
        salesGoal: {
            percentage: number;
            soldFor: number;
            monthGoal: number;
            left: number;
        };
        conversionRate: {
            percentage: number;
            cart: number;
            checkout: number;
            purchase: number;
        };
        avgOrderValue: {
            thisMonth: number;
            prevMonth: number;
            trend: {
                time: string | undefined;
                value: number;
            }[];
        };
    }>;
    groupDataByMonth(metrics: DailyMetrics[], from: Date, to: Date): {
        month: string;
        newCustomers: number;
        returningCustomers: number;
    }[];
};
//# sourceMappingURL=reports.service.d.ts.map