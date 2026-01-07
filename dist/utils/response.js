const createBaseResponse = (success) => ({
    success,
    timestamp: new Date().toISOString(),
});
export const successResponse = (data, message = "Success") => ({
    ...createBaseResponse(true),
    message,
    data,
});
export const paginatedResponse = (data, pagination, message = "Success") => ({
    ...createBaseResponse(true),
    data,
    pagination,
    message,
});
export const errorResponse = (message = "Operation failed", error) => ({
    ...createBaseResponse(false),
    message,
    data: null,
    error: error instanceof Error ? error.message : error,
});
//# sourceMappingURL=response.js.map