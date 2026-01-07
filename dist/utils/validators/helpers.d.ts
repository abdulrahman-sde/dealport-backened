import { z } from "zod";
export declare const numericString: (fieldName?: string) => z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>;
export declare const optionalNumericString: (fieldName?: string, defaultValue?: number) => z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>;
export declare const safeNumber: (fieldName?: string) => z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>;
export declare const paginationSchema: z.ZodObject<{
    page: z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>;
    limit: z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>;
}, z.core.$strip>;
export declare const enumField: <T extends readonly [string, ...string[]]>(values: T, fieldName?: string) => z.ZodEnum<{ [k_1 in T[number]]: k_1; } extends infer T_1 ? { [k in keyof T_1]: T_1[k]; } : never>;
//# sourceMappingURL=helpers.d.ts.map