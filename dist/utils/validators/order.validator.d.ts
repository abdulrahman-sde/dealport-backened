import { z } from "zod";
export declare const customerInputSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
}, z.core.$strip>;
export declare const addressSchema: z.ZodObject<{
    street: z.ZodString;
    address2: z.ZodOptional<z.ZodString>;
    city: z.ZodString;
    state: z.ZodOptional<z.ZodString>;
    country: z.ZodString;
    postalCode: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    apartment: z.ZodOptional<z.ZodString>;
    isDefault: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const strictAddressSchema: z.ZodObject<{
    street: z.ZodString;
    address2: z.ZodOptional<z.ZodString>;
    city: z.ZodString;
    state: z.ZodOptional<z.ZodString>;
    country: z.ZodString;
    postalCode: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    apartment: z.ZodOptional<z.ZodString>;
    isDefault: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const orderItemInputSchema: z.ZodObject<{
    productId: z.ZodString;
    quantity: z.ZodNumber;
}, z.core.$strip>;
export declare const paymentMethodSchema: z.ZodEnum<{
    [x: string]: string;
}>;
export declare const createOrderInputSchema: z.ZodObject<{
    customerId: z.ZodOptional<z.ZodString>;
    customer: z.ZodOptional<z.ZodObject<{
        firstName: z.ZodString;
        lastName: z.ZodString;
        email: z.ZodString;
        phone: z.ZodString;
    }, z.core.$strip>>;
    sessionId: z.ZodOptional<z.ZodString>;
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        quantity: z.ZodNumber;
    }, z.core.$strip>>;
    shippingAddress: z.ZodObject<{
        street: z.ZodString;
        address2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        state: z.ZodOptional<z.ZodString>;
        country: z.ZodString;
        postalCode: z.ZodString;
        phone: z.ZodOptional<z.ZodString>;
        apartment: z.ZodOptional<z.ZodString>;
        isDefault: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>;
    billingAddress: z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        address2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        state: z.ZodOptional<z.ZodString>;
        country: z.ZodString;
        postalCode: z.ZodString;
        phone: z.ZodOptional<z.ZodString>;
        apartment: z.ZodOptional<z.ZodString>;
        isDefault: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>;
    paymentMethod: z.ZodEnum<{
        [x: string]: string;
    }>;
    shippingFee: z.ZodOptional<z.ZodNumber>;
    taxAmount: z.ZodOptional<z.ZodNumber>;
    discount: z.ZodOptional<z.ZodNumber>;
    couponCode: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
    ipAddress: z.ZodOptional<z.ZodString>;
    userAgent: z.ZodOptional<z.ZodString>;
    country: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const parseCreateOrderInput: (input: unknown) => {
    items: {
        productId: string;
        quantity: number;
    }[];
    shippingAddress: {
        street: string;
        city: string;
        country: string;
        postalCode: string;
        address2?: string | undefined;
        state?: string | undefined;
        phone?: string | undefined;
        apartment?: string | undefined;
        isDefault?: boolean | undefined;
    };
    paymentMethod: string;
    customerId?: string | undefined;
    customer?: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    } | undefined;
    sessionId?: string | undefined;
    billingAddress?: {
        street: string;
        city: string;
        country: string;
        postalCode: string;
        address2?: string | undefined;
        state?: string | undefined;
        phone?: string | undefined;
        apartment?: string | undefined;
        isDefault?: boolean | undefined;
    } | undefined;
    shippingFee?: number | undefined;
    taxAmount?: number | undefined;
    discount?: number | undefined;
    couponCode?: string | undefined;
    notes?: string | undefined;
    ipAddress?: string | undefined;
    userAgent?: string | undefined;
    country?: string | undefined;
};
export type CreateOrderInput = z.infer<typeof createOrderInputSchema>;
export declare const getOrdersQuerySchema: z.ZodObject<{
    page: z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>;
    limit: z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>;
    search: z.ZodOptional<z.ZodString>;
    fulfillmentStatus: z.ZodOptional<z.ZodEnum<{
        [x: string]: string;
    }>>;
    paymentStatus: z.ZodOptional<z.ZodEnum<{
        [x: string]: string;
    }>>;
    startDate: z.ZodOptional<z.ZodString>;
    endDate: z.ZodOptional<z.ZodString>;
    customerId: z.ZodOptional<z.ZodString>;
    sortBy: z.ZodDefault<z.ZodEnum<{
        [x: string]: string;
    }>>;
    sortOrder: z.ZodDefault<z.ZodEnum<{
        [x: string]: string;
    }>>;
}, z.core.$strip>;
export type GetOrdersQuery = z.infer<typeof getOrdersQuerySchema>;
export declare const updateOrderSchema: z.ZodObject<{
    fulfillmentStatus: z.ZodOptional<z.ZodEnum<{
        [x: string]: string;
    }>>;
    paymentStatus: z.ZodOptional<z.ZodEnum<{
        [x: string]: string;
    }>>;
}, z.core.$strip>;
export type UpdateOrderInput = z.infer<typeof updateOrderSchema>;
//# sourceMappingURL=order.validator.d.ts.map