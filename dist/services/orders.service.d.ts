import type { CreateOrderInput, GetOrdersQuery, UpdateOrderInput } from "../utils/validators/order.validator.js";
import type { OrderCreationResult } from "../types/orders.types.js";
export declare const ordersService: {
    createOrder(input: CreateOrderInput): Promise<OrderCreationResult>;
    getOrders(query: GetOrdersQuery): Promise<{
        data: {
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
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
            hasNextPage: boolean;
            hasPrevPage: boolean;
        };
        meta: {
            all: number;
            pending: number;
            completed: number;
            canceled: number;
        };
    }>;
    updateOrder(id: string, input: UpdateOrderInput): Promise<{
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
};
//# sourceMappingURL=orders.service.d.ts.map