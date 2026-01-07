import type { CreateOrderInput } from "../utils/validators/order.validator.js";
export type ServerOrderItem = {
    productId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    productName: string;
    productImage?: string;
    productSku: string;
};
export type CreateOrderDTO = Omit<CreateOrderInput, "items" | "shippingFee" | "taxAmount" | "discount"> & {
    items: ServerOrderItem[];
    shippingFee: number;
    taxAmount: number;
    discount: number;
    subtotal: number;
    totalAmount: number;
};
export type OrderCreationResult = {
    orderId: string;
    orderNumber: string;
    totalAmount: number;
};
export type OrderStatsFacetResult = {
    total: {
        count: number;
    }[];
    pending: {
        count: number;
    }[];
    delivered: {
        count: number;
    }[];
    canceled: {
        count: number;
    }[];
};
export type OrderStatsResult = {
    all: number;
    pending: number;
    delivered: number;
    canceled: number;
};
//# sourceMappingURL=orders.types.d.ts.map