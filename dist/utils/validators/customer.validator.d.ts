import { z } from "zod";
export declare const getCustomersQuerySchema: z.ZodObject<{
    page: z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>;
    limit: z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>;
    search: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        [x: string]: string;
    }>>;
    sortBy: z.ZodDefault<z.ZodEnum<{
        [x: string]: string;
    }>>;
    sortOrder: z.ZodDefault<z.ZodEnum<{
        [x: string]: string;
    }>>;
}, z.core.$strip>;
export type GetCustomersQuery = z.infer<typeof getCustomersQuerySchema>;
export declare const createCustomerSchema: z.ZodObject<{
    firstName: z.ZodString;
    role: z.ZodDefault<z.ZodEnum<{
        GUEST: "GUEST";
        CUSTOMER: "CUSTOMER";
    }>>;
    isGuest: z.ZodDefault<z.ZodBoolean>;
    lastName: z.ZodString;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        address2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        state: z.ZodOptional<z.ZodString>;
        postalCode: z.ZodString;
        country: z.ZodString;
        phone: z.ZodOptional<z.ZodString>;
        apartment: z.ZodOptional<z.ZodString>;
        isDefault: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;
export declare const updateCustomerSchema: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
        VIP: "VIP";
    }>>;
    notes: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    isGuest: z.ZodOptional<z.ZodBoolean>;
    address: z.ZodOptional<z.ZodObject<{
        street: z.ZodOptional<z.ZodString>;
        address2: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        city: z.ZodOptional<z.ZodString>;
        state: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        postalCode: z.ZodOptional<z.ZodString>;
        country: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        apartment: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        isDefault: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type UpdateCustomerInput = z.infer<typeof updateCustomerSchema>;
export declare const customerParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=customer.validator.d.ts.map