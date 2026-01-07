import type { Prisma } from "@prisma/client";
export declare const analyticsRepository: {
    getOrderMetrics(startOfDay: Date, endOfDay: Date): Promise<{
        totalOrders: number;
        totalSales: number;
        completedOrders: number;
        cancelledOrders: number;
        pendingOrders: number;
        processingOrders: number;
        shippedOrders: number;
        newOrders: number;
        returningCustomers: number;
    }>;
    getProductMetrics(): Promise<{
        totalProducts: number;
        inStockProducts: number;
        outOfStockProducts: number;
    }>;
    getNewCustomersCount(startOfDay: Date, endOfDay: Date): Promise<number>;
    getTotalCustomersCount(): Promise<number>;
    getSessionMetrics(startOfDay: Date, endOfDay: Date): Promise<{
        totalVisits: number;
        uniqueVisits: number;
        totalPageViews: number;
        addToCartCount: number;
        checkoutStartedCount: number;
        convertedSessions: number;
    }>;
    getProductViewMetrics(startOfDay: Date, endOfDay: Date): Promise<(Prisma.PickEnumerable<Prisma.SessionEventGroupByOutputType, "productId"[]> & {
        _count: {
            id: number;
        };
    })[]>;
    getTransactionMetrics(startOfDay: Date, endOfDay: Date): Promise<{
        completedTransactions: number;
        pendingTransactions: number;
        failedTransactions: number;
    }>;
    getSalesByCountry(from: Date, to: Date): Promise<Record<string, number>>;
    getVisitsByDevice(startOfDay: Date, endOfDay: Date): Promise<Record<string, number>>;
    upsertDailyMetrics(date: Date, data: Omit<Prisma.DailyMetricsCreateInput, "date">): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        totalOrders: number;
        averageOrderValue: number;
        date: Date;
        totalSales: number;
        totalVisits: number;
        uniqueVisits: number;
        totalPageViews: number;
        conversionRate: number;
        cartRate: number;
        checkoutRate: number;
        purchaseRate: number;
        newOrders: number;
        completedOrders: number;
        cancelledOrders: number;
        salesGoal: number | null;
        salesGoalProgress: number;
        newCustomers: number;
        returningCustomers: number;
        totalCustomers: number;
        totalProducts: number;
        inStockProducts: number;
        outOfStockProducts: number;
        pendingOrders: number;
        processingOrders: number;
        shippedOrders: number;
        deliveredOrders: number;
        canceledOrders: number;
        completedTransactions: number;
        pendingTransactions: number;
        failedTransactions: number;
        visitsChange: number | null;
        salesChange: number | null;
        ordersChange: number | null;
        salesByCountry: Prisma.JsonValue | null;
        visitsByDevice: Prisma.JsonValue | null;
    }>;
    getWeeklyOrderStats({ from, to }: {
        from: Date;
        to: Date;
    }): Promise<{
        totalOrders: number;
        totalSales: number;
        completedOrders: number;
        cancelledOrders: number;
        pendingOrders: number;
        processingOrders: number;
        shippedOrders: number;
        newOrders: number;
        averageOrderValue: number;
        countrySales: Record<string, number>;
    }>;
    getWeeklyCustomerStats({ from, to }: {
        from: Date;
        to: Date;
    }): Promise<{
        newCustomers: number;
        returningCustomers: number;
        totalVisits: number;
        totalCustomers: number;
    }>;
    getWeeklyTransactionStats({ from, to }: {
        from: Date;
        to: Date;
    }): Promise<{
        completedTransactions: number;
        pendingTransactions: number;
        failedTransactions: number;
    }>;
    getWeeklyProductStats({ from, to }: {
        from: Date;
        to: Date;
    }): Promise<{
        totalProducts: number;
        inStockProducts: number;
        outOfStockProducts: number;
    }>;
    getDailyMetricsInRange({ from, to }: {
        from: Date;
        to: Date;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        totalOrders: number;
        averageOrderValue: number;
        date: Date;
        totalSales: number;
        totalVisits: number;
        uniqueVisits: number;
        totalPageViews: number;
        conversionRate: number;
        cartRate: number;
        checkoutRate: number;
        purchaseRate: number;
        newOrders: number;
        completedOrders: number;
        cancelledOrders: number;
        salesGoal: number | null;
        salesGoalProgress: number;
        newCustomers: number;
        returningCustomers: number;
        totalCustomers: number;
        totalProducts: number;
        inStockProducts: number;
        outOfStockProducts: number;
        pendingOrders: number;
        processingOrders: number;
        shippedOrders: number;
        deliveredOrders: number;
        canceledOrders: number;
        completedTransactions: number;
        pendingTransactions: number;
        failedTransactions: number;
        visitsChange: number | null;
        salesChange: number | null;
        ordersChange: number | null;
        salesByCountry: Prisma.JsonValue | null;
        visitsByDevice: Prisma.JsonValue | null;
    }[]>;
    getLiveDailyMetricForDate(date: Date): Promise<{
        date: Date;
        totalVisits: number;
        uniqueVisits: number;
        totalPageViews: number;
        totalOrders: number;
        totalSales: number;
        completedOrders: number;
        pendingOrders: number;
        shippedOrders: number;
        processingOrders: number;
        cancelledOrders: number;
        averageOrderValue: number;
        completedTransactions: number;
        pendingTransactions: number;
        failedTransactions: number;
        conversionRate: number;
        cartRate: number;
        checkoutRate: number;
        purchaseRate: number;
        newCustomers: number;
        returningCustomers: number;
        totalCustomers: number;
        totalProducts: number;
        inStockProducts: number;
        outOfStockProducts: number;
        salesByCountry: Record<string, number>;
        visitsByDevice: Record<string, number>;
    }>;
    getRealTimeStats(): Promise<{
        activeUsers: number;
        usersPerMinute: any[];
    }>;
    getLiveDailyMetric(): Promise<{
        date: Date;
        totalVisits: number;
        uniqueVisits: number;
        totalPageViews: number;
        totalOrders: number;
        totalSales: number;
        completedOrders: number;
        pendingOrders: number;
        shippedOrders: number;
        processingOrders: number;
        cancelledOrders: number;
        averageOrderValue: number;
        completedTransactions: number;
        pendingTransactions: number;
        failedTransactions: number;
        conversionRate: number;
        cartRate: number;
        checkoutRate: number;
        purchaseRate: number;
        newCustomers: number;
        returningCustomers: number;
        totalCustomers: number;
        totalProducts: number;
        inStockProducts: number;
        outOfStockProducts: number;
        salesByCountry: Record<string, number>;
        visitsByDevice: Record<string, number>;
    }>;
};
//# sourceMappingURL=analytics.repository.d.ts.map