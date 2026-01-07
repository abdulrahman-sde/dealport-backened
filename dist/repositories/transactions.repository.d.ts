import type { Prisma } from "@prisma/client";
export declare const transactionsRepository: {
    findAll(params: {
        skip: number;
        take: number;
        where: Prisma.TransactionWhereInput;
        orderBy: Prisma.TransactionOrderByWithRelationInput;
    }): Promise<{
        transactions: ({
            customer: {
                email: string;
                firstName: string;
                lastName: string;
            };
            storePaymentMethod: {
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
            } | null;
            order: {
                orderNumber: string;
                totalAmount: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerId: string;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
            paymentMethod: import("@prisma/client").$Enums.PaymentMethod;
            paidAt: Date | null;
            orderId: string;
            transactionNumber: string;
            amount: number;
            currency: string;
            paymentGateway: import("@prisma/client").$Enums.PaymentGateway;
            paymentMethodDetails: Prisma.JsonValue | null;
            gatewayTransactionId: string | null;
            gatewayResponse: Prisma.JsonValue | null;
            failureReason: string | null;
            failureCode: string | null;
            retryCount: number;
            webhookReceived: boolean;
            webhookReceivedAt: Date | null;
            requiresAction: boolean;
            actionUrl: string | null;
            failedAt: Date | null;
            storePaymentMethodId: string | null;
        })[];
        total: number;
    }>;
    findById(id: string): Promise<({
        customer: {
            email: string;
            firstName: string;
            lastName: string;
        };
        storePaymentMethod: {
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
        } | null;
        order: {
            id: string;
            orderNumber: string;
            totalAmount: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
        paymentMethod: import("@prisma/client").$Enums.PaymentMethod;
        paidAt: Date | null;
        orderId: string;
        transactionNumber: string;
        amount: number;
        currency: string;
        paymentGateway: import("@prisma/client").$Enums.PaymentGateway;
        paymentMethodDetails: Prisma.JsonValue | null;
        gatewayTransactionId: string | null;
        gatewayResponse: Prisma.JsonValue | null;
        failureReason: string | null;
        failureCode: string | null;
        retryCount: number;
        webhookReceived: boolean;
        webhookReceivedAt: Date | null;
        requiresAction: boolean;
        actionUrl: string | null;
        failedAt: Date | null;
        storePaymentMethodId: string | null;
    }) | null>;
};
export default transactionsRepository;
//# sourceMappingURL=transactions.repository.d.ts.map