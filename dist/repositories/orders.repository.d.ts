import { type Prisma, FulfillmentStatus, PaymentStatus } from "@prisma/client";
import type { OrderStatsResult } from "../types/orders.types.js";
export declare const ordersRepository: {
    findProductsByIds(ids: string[]): Prisma.PrismaPromise<{
        name: string;
        id: string;
        sku: string;
        price: number;
        stockQuantity: number;
        isUnlimitedStock: boolean;
        images: string[];
    }[]>;
    createGuestCustomer(data: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    }): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: import("@prisma/client").$Enums.CustomerRole;
        phone: string | null;
        isGuest: boolean;
    }>;
    createOrderRecord({ orderData, orderItems, transactionData, }: {
        orderData: Prisma.OrderCreateInput;
        orderItems: Omit<Prisma.OrderItemCreateManyInput, "orderId">[];
        transactionData: Prisma.TransactionCreateInput;
    }): Promise<{
        order: Prisma.OrderGetPayload<{}>;
        transaction: Prisma.TransactionGetPayload<{}>;
    }>;
    findAll(params: {
        skip: number;
        take: number;
        where: Prisma.OrderWhereInput;
        orderBy: Prisma.OrderOrderByWithRelationInput;
    }): Promise<{
        orders: {
            id: string;
            createdAt: Date;
            customer: {
                email: string;
                firstName: string;
                lastName: string;
            };
            transaction: {
                paymentMethod: import("@prisma/client").$Enums.PaymentMethod;
            } | null;
            orderNumber: string;
            shippingFee: number;
            discount: number;
            totalAmount: number;
            couponCode: string | null;
            fulfillmentStatus: import("@prisma/client").$Enums.FulfillmentStatus;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
            items: {
                product: {
                    images: string[];
                    thumbnail: string | null;
                };
                productId: string;
                quantity: number;
                productName: string;
                productImage: string | null;
                unitPrice: number;
            }[];
        }[];
        total: number;
    }>;
    updateStatus(orderId: string, data: {
        fulfillmentStatus?: FulfillmentStatus;
        paymentStatus?: PaymentStatus;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        notes: string | null;
        country: string | null;
        orderNumber: string;
        customerId: string;
        sessionId: string | null;
        subtotal: number;
        taxAmount: number;
        shippingFee: number;
        discount: number;
        totalAmount: number;
        couponId: string | null;
        couponCode: string | null;
        fulfillmentStatus: import("@prisma/client").$Enums.FulfillmentStatus;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
        paymentMethod: import("@prisma/client").$Enums.PaymentMethod | null;
        trackingNumber: string | null;
        codAmount: number | null;
        codCollected: boolean;
        codCollectedBy: string | null;
        codCollectionDate: Date | null;
        ipAddress: string | null;
        userAgent: string | null;
        paidAt: Date | null;
        shippedAt: Date | null;
        deliveredAt: Date | null;
        canceledAt: Date | null;
        shippingAddress: {
            street: string;
            address2: string | null;
            city: string;
            state: string | null;
            country: string;
            postalCode: string;
            phone: string | null;
            apartment: string | null;
            isDefault: boolean | null;
        } | null;
        billingAddress: {
            street: string;
            address2: string | null;
            city: string;
            state: string | null;
            country: string;
            postalCode: string;
            phone: string | null;
            apartment: string | null;
            isDefault: boolean | null;
        } | null;
    }>;
    getFilterCounts: () => Promise<OrderStatsResult>;
};
export default ordersRepository;
//# sourceMappingURL=orders.repository.d.ts.map