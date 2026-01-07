import { z } from "zod";
export declare const getTransactionsQuerySchema: z.ZodObject<{
    page: z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>;
    limit: z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>;
    search: z.ZodOptional<z.ZodString>;
    storePaymentMethodId: z.ZodOptional<z.ZodString>;
    paymentStatus: z.ZodOptional<z.ZodEnum<{
        [x: string]: string;
    }>>;
    startDate: z.ZodOptional<z.ZodString>;
    endDate: z.ZodOptional<z.ZodString>;
    sortBy: z.ZodDefault<z.ZodEnum<{
        [x: string]: string;
    }>>;
    sortOrder: z.ZodDefault<z.ZodEnum<{
        [x: string]: string;
    }>>;
}, z.core.$strip>;
export type GetTransactionsQuery = z.infer<typeof getTransactionsQuerySchema>;
//# sourceMappingURL=transaction.validator.d.ts.map