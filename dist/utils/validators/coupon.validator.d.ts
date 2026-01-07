import { z } from "zod";
export declare const CouponTypeEnum: z.ZodEnum<{
    FIXED: "FIXED";
    PERCENTAGE: "PERCENTAGE";
    FREE_SHIPPING: "FREE_SHIPPING";
    PRICE_DISCOUNT: "PRICE_DISCOUNT";
}>;
export declare const CouponStatusEnum: z.ZodEnum<{
    ACTIVE: "ACTIVE";
    INACTIVE: "INACTIVE";
    EXPIRED: "EXPIRED";
}>;
export declare const createCouponSchema: z.ZodObject<{
    code: z.ZodString;
    name: z.ZodString;
    type: z.ZodEnum<{
        FIXED: "FIXED";
        PERCENTAGE: "PERCENTAGE";
        FREE_SHIPPING: "FREE_SHIPPING";
        PRICE_DISCOUNT: "PRICE_DISCOUNT";
    }>;
    value: z.ZodDefault<z.ZodNumber>;
    startDate: z.ZodCoercedDate<unknown>;
    endDate: z.ZodNullable<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    usageLimit: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    status: z.ZodDefault<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
        EXPIRED: "EXPIRED";
    }>>;
    appliesTo: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type CreateCouponInput = z.infer<typeof createCouponSchema>;
export declare const updateCouponSchema: z.ZodObject<{
    code: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        FIXED: "FIXED";
        PERCENTAGE: "PERCENTAGE";
        FREE_SHIPPING: "FREE_SHIPPING";
        PRICE_DISCOUNT: "PRICE_DISCOUNT";
    }>>;
    value: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    startDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
        EXPIRED: "EXPIRED";
    }>>>;
    appliesTo: z.ZodOptional<z.ZodOptional<z.ZodAny>>;
    usageLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    endDate: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
}, z.core.$strip>;
export type UpdateCouponInput = z.infer<typeof updateCouponSchema>;
export declare const getCouponsQuerySchema: z.ZodObject<{
    page: z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>;
    limit: z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>;
    search: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
        EXPIRED: "EXPIRED";
    }>>;
    type: z.ZodOptional<z.ZodEnum<{
        FIXED: "FIXED";
        PERCENTAGE: "PERCENTAGE";
        FREE_SHIPPING: "FREE_SHIPPING";
        PRICE_DISCOUNT: "PRICE_DISCOUNT";
    }>>;
    sortBy: z.ZodDefault<z.ZodEnum<{
        [x: string]: string;
    }>>;
    sortOrder: z.ZodDefault<z.ZodEnum<{
        [x: string]: string;
    }>>;
}, z.core.$strip>;
export type GetCouponsQuery = z.infer<typeof getCouponsQuerySchema>;
export declare const bulkDeleteCouponsSchema: z.ZodObject<{
    ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type BulkDeleteCouponsInput = z.infer<typeof bulkDeleteCouponsSchema>;
//# sourceMappingURL=coupon.validator.d.ts.map