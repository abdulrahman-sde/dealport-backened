export const getPaginationParams = (req, defaultLimit = 10, maxLimit = 100) => {
    let page = Number(req.query.page);
    let limit = Number(req.query.limit);
    if (Number.isNaN(page) || page < 1) {
        page = 1;
    }
    if (Number.isNaN(limit) || limit < 1) {
        limit = defaultLimit;
    }
    if (limit > maxLimit) {
        limit = maxLimit;
    }
    const skip = (page - 1) * limit;
    return { page, limit, skip };
};
//# sourceMappingURL=pagination.js.map