export const getSkipTake = ({ page, limit }) => {
    return {
        skip: (page - 1) * limit,
        take: limit,
    };
};
export const getPaginationMeta = (total, { page, limit }) => {
    return {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page * limit < total,
        hasPrevPage: page > 1,
    };
};
export const buildDateRangeFilter = (startDate, endDate) => {
    if (!startDate && !endDate)
        return undefined;
    const filter = {};
    if (startDate)
        filter.gte = new Date(startDate);
    if (endDate)
        filter.lte = new Date(endDate);
    return filter;
};
//# sourceMappingURL=query.utils.js.map