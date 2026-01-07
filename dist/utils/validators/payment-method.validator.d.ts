import { z } from "zod";
export declare const createPaymentMethodSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodEnum<{
        CREDIT_CARD: "CREDIT_CARD";
        DEBIT_CARD: "DEBIT_CARD";
        PAYPAL: "PAYPAL";
        BANK_TRANSFER: "BANK_TRANSFER";
        CASH_ON_DELIVERY: "CASH_ON_DELIVERY";
    }>;
    provider: z.ZodOptional<z.ZodString>;
    last4: z.ZodString;
    expiryDate: z.ZodOptional<z.ZodString>;
    holderName: z.ZodString;
    isDefault: z.ZodDefault<z.ZodBoolean>;
    status: z.ZodDefault<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
    }>>;
}, z.core.$strip>;
export declare const updatePaymentMethodSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        CREDIT_CARD: "CREDIT_CARD";
        DEBIT_CARD: "DEBIT_CARD";
        PAYPAL: "PAYPAL";
        BANK_TRANSFER: "BANK_TRANSFER";
        CASH_ON_DELIVERY: "CASH_ON_DELIVERY";
    }>>;
    provider: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    last4: z.ZodOptional<z.ZodString>;
    expiryDate: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    holderName: z.ZodOptional<z.ZodString>;
    isDefault: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
    }>>>;
}, z.core.$strip>;
export type CreatePaymentMethodInput = z.infer<typeof createPaymentMethodSchema>;
export type UpdatePaymentMethodInput = z.infer<typeof updatePaymentMethodSchema>;
//# sourceMappingURL=payment-method.validator.d.ts.map