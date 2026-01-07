import type { Prisma, Coupon } from "@prisma/client";
export declare const couponsRepository: {
    findById(id: string): Promise<Coupon | null>;
    findByCode(code: string): Promise<Coupon | null>;
    create(data: Prisma.CouponCreateInput): Promise<Coupon>;
    update(id: string, data: Prisma.CouponUpdateInput): Promise<Coupon>;
    delete(id: string): Promise<Coupon>;
    findAll(params: {
        skip: number;
        take: number;
        where: Prisma.CouponWhereInput;
        orderBy: Prisma.CouponOrderByWithRelationInput;
    }): Promise<{
        coupons: {
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
        total: number;
    }>;
    incrementUsage(id: string): Promise<{
        id: string;
        usageCount: number;
    }>;
    deleteMany(ids: string[]): Promise<number>;
};
//# sourceMappingURL=coupons.repository.d.ts.map