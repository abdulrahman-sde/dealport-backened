const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const formatCustomerOverviewMetrics = (metrics) => {
    const formatted = daysOfWeek.map((day) => ({
        day,
        activeCustomers: 0,
        repeatCustomers: 0,
        shopVisitor: 0,
        conversionRate: 0,
    }));
    metrics.forEach((metric) => {
        const dayIndex = new Date(metric.date).getDay();
        formatted[dayIndex] = {
            day: daysOfWeek[dayIndex] || "",
            activeCustomers: metric.newCustomers + metric.returningCustomers,
            repeatCustomers: metric.returningCustomers,
            shopVisitor: metric.totalVisits,
            conversionRate: metric.conversionRate,
        };
    });
    return formatted;
};
export const formatReportMetrics = (metrics) => {
    const formatted = daysOfWeek.map((day) => ({
        day,
        conversionRate: 0,
        customers: 0,
        totalProducts: 0,
        stockProducts: 0,
        outOfStock: 0,
        revenue: 0,
    }));
    metrics.forEach((metric) => {
        const dayIndex = new Date(metric.date).getDay();
        formatted[dayIndex] = {
            day: daysOfWeek[dayIndex] || "",
            conversionRate: metric.conversionRate,
            customers: metric.newCustomers + metric.returningCustomers,
            totalProducts: metric.totalProducts,
            stockProducts: metric.inStockProducts,
            outOfStock: metric.outOfStockProducts,
            revenue: metric.totalSales,
        };
    });
    return formatted;
};
//# sourceMappingURL=analytics.utils.js.map