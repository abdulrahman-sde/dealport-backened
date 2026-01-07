import type { Request } from "express";
interface PaginationParams {
    page: number;
    limit: number;
    skip: number;
}
export declare const getPaginationParams: (req: Request, defaultLimit?: number, maxLimit?: number) => PaginationParams;
export {};
//# sourceMappingURL=pagination.d.ts.map