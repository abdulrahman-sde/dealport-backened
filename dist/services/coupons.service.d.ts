import type { Prisma, Coupon } from "@prisma/client";
import type { CreateCouponInput, UpdateCouponInput, GetCouponsQuery } from "../utils/validators/coupon.validator.js";
export interface CouponValidationResult {
    coupon: Coupon;
    discountAmount: number;
}
export declare const couponsService: {
    getCoupons(query: GetCouponsQuery): Promise<{
        data: {
            name: string;
            id: string;
            status: import("@prisma/client").$Enums.CouponStatus;
            createdAt: Date;
            updatedAt: Date;
            type: import("@prisma/client").$Enums.CouponType;
            value: number;
            startDate: Date;
            endDate: Date | null;
            code: string;
            usageLimit: number | null;
            usageCount: number;
            appliesTo: Prisma.JsonValue | null;
        }[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
            hasNextPage: boolean;
            hasPrevPage: boolean;
        };
    }>;
    getCouponById(id: string): Promise<{
        name: string;
        id: string;
        status: import("@prisma/client").$Enums.CouponStatus;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.CouponType;
        value: number;
        startDate: Date;
        endDate: Date | null;
        code: string;
        usageLimit: number | null;
        usageCount: number;
        appliesTo: Prisma.JsonValue | null;
    }>;
    createCoupon(input: CreateCouponInput): Promise<{
        name: string;
        id: string;
        status: import("@prisma/client").$Enums.CouponStatus;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.CouponType;
        value: number;
        startDate: Date;
        endDate: Date | null;
        code: string;
        usageLimit: number | null;
        usageCount: number;
        appliesTo: Prisma.JsonValue | null;
    }>;
    updateCoupon(id: string, input: UpdateCouponInput): Promise<{
        name: string;
        id: string;
        status: import("@prisma/client").$Enums.CouponStatus;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.CouponType;
        value: number;
        startDate: Date;
        endDate: Date | null;
        code: string;
        usageLimit: number | null;
        usageCount: number;
        appliesTo: Prisma.JsonValue | null;
    }>;
    deleteCoupon(id: string): Promise<{
        name: string;
        id: string;
        status: import("@prisma/client").$Enums.CouponStatus;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.CouponType;
        value: number;
        startDate: Date;
        endDate: Date | null;
        code: string;
        usageLimit: number | null;
        usageCount: number;
        appliesTo: Prisma.JsonValue | null;
    }>;
    bulkDeleteCoupons(ids: string[]): Promise<number>;
    validateAndApplyCoupon(couponCode: string, subtotal: number, shippingFee: number): Promise<CouponValidationResult>;
};
//# sourceMappingURL=coupons.service.d.ts.map