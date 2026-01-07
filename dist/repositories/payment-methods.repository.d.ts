import type { Prisma } from "@prisma/client";
export declare const paymentMethodsRepository: {
    create(data: Prisma.StorePaymentMethodCreateInput): Promise<{
        name: string;
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.PaymentMethod;
        isDefault: boolean;
        provider: string | null;
        last4: string;
        expiryDate: string | null;
        holderName: string;
    }>;
    findAll(): Promise<{
        transactionCount: number;
        totalRevenue: number;
        name: string;
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.PaymentMethod;
        isDefault: boolean;
        provider: string | null;
        last4: string;
        expiryDate: string | null;
        holderName: string;
    }[]>;
    findById(id: string): Promise<{
        name: string;
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.PaymentMethod;
        isDefault: boolean;
        provider: string | null;
        last4: string;
        expiryDate: string | null;
        holderName: string;
    } | null>;
    update(id: string, data: Prisma.StorePaymentMethodUpdateInput): Promise<{
        name: string;
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.PaymentMethod;
        isDefault: boolean;
        provider: string | null;
        last4: string;
        expiryDate: string | null;
        holderName: string;
    }>;
    delete(id: string): Promise<{
        name: string;
        id: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.PaymentMethod;
        isDefault: boolean;
        provider: string | null;
        last4: string;
        expiryDate: string | null;
        holderName: string;
    }>;
};
//# sourceMappingURL=payment-methods.repository.d.ts.map