import type { ApiResponse, PaginatedResponse, PaginationParams } from "../types/common.types.js";
export declare const successResponse: <T = unknown>(data: T, message?: string) => ApiResponse<T>;
export declare const paginatedResponse: <T>(data: T[], pagination: PaginationParams, message?: string) => PaginatedResponse<T>;
export declare const errorResponse: (message?: string, error?: unknown) => ApiResponse<null>;
//# sourceMappingURL=response.d.ts.map