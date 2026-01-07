import type { PaginationOptions } from "../types/common.types.js";
export declare const getSkipTake: ({ page, limit }: PaginationOptions) => {
    skip: number;
    take: number;
};
export declare const getPaginationMeta: (total: number, { page, limit }: PaginationOptions) => {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
};
export declare const buildDateRangeFilter: (startDate?: Date | string | null, endDate?: Date | string | null) => {
    gte?: Date;
    lte?: Date;
} | undefined;
//# sourceMappingURL=query.utils.d.ts.map