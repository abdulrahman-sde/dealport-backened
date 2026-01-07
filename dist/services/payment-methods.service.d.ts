import type { CreatePaymentMethodInput, UpdatePaymentMethodInput } from "../utils/validators/payment-method.validator.js";
export declare const paymentMethodsService: {
    createPaymentMethod(data: CreatePaymentMethodInput): Promise<{
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
    getAllPaymentMethods(): Promise<{
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
    getPaymentMethodById(id: string): Promise<{
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
    updatePaymentMethod(id: string, data: UpdatePaymentMethodInput): Promise<{
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
    deletePaymentMethod(id: string): Promise<{
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
//# sourceMappingURL=payment-methods.service.d.ts.map