import { z } from "zod";
export declare const createProductSchema: z.ZodObject<{
    name: z.ZodString;
    slug: z.ZodString;
    sku: z.ZodString;
    description: z.ZodString;
    price: z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>;
    costPrice: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>>;
    discountPrice: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>>;
    stockQuantity: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>>;
    lowStockThreshold: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>>;
    isUnlimitedStock: z.ZodOptional<z.ZodBoolean>;
    images: z.ZodOptional<z.ZodArray<z.ZodString>>;
    thumbnail: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodString;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    colors: z.ZodOptional<z.ZodArray<z.ZodString>>;
    status: z.ZodOptional<z.ZodEnum<{
        [x: string]: string;
    }>>;
    isFeatured: z.ZodOptional<z.ZodBoolean>;
    expirationStart: z.ZodPipe<z.ZodTransform<Date | undefined, unknown>, z.ZodOptional<z.ZodDate>>;
    expirationEnd: z.ZodPipe<z.ZodTransform<Date | undefined, unknown>, z.ZodOptional<z.ZodDate>>;
}, z.core.$strip>;
export declare const updateProductSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    sku: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>>;
    costPrice: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>>;
    discountPrice: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>>;
    stockQuantity: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>>;
    lowStockThreshold: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>>;
    isUnlimitedStock: z.ZodOptional<z.ZodBoolean>;
    images: z.ZodOptional<z.ZodArray<z.ZodString>>;
    thumbnail: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    colors: z.ZodOptional<z.ZodArray<z.ZodString>>;
    status: z.ZodOptional<z.ZodEnum<{
        [x: string]: string;
    }>>;
    isFeatured: z.ZodOptional<z.ZodBoolean>;
    expirationStart: z.ZodPipe<z.ZodTransform<Date | undefined, unknown>, z.ZodOptional<z.ZodDate>>;
    expirationEnd: z.ZodPipe<z.ZodTransform<Date | undefined, unknown>, z.ZodOptional<z.ZodDate>>;
}, z.core.$strip>;
export declare const getProductsQuerySchema: z.ZodObject<{
    page: z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>;
    limit: z.ZodPipe<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>, z.ZodNumber>;
    search: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        [x: string]: string;
    }>>;
    isFeatured: z.ZodPipe<z.ZodTransform<boolean, unknown>, z.ZodOptional<z.ZodBoolean>>;
    hasDiscount: z.ZodPipe<z.ZodTransform<boolean, unknown>, z.ZodOptional<z.ZodBoolean>>;
    stockStatus: z.ZodOptional<z.ZodEnum<{
        [x: string]: string;
    }>>;
    sortBy: z.ZodDefault<z.ZodEnum<{
        [x: string]: string;
    }>>;
    sortOrder: z.ZodDefault<z.ZodEnum<{
        [x: string]: string;
    }>>;
}, z.core.$strip>;
export type GetProductsQuery = z.infer<typeof getProductsQuerySchema>;
export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
export type ProductQueryInput = GetProductsQuery;
export declare const bulkDeleteProductsSchema: z.ZodObject<{
    ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type BulkDeleteInput = z.infer<typeof bulkDeleteProductsSchema>;
//# sourceMappingURL=product.validator.d.ts.map