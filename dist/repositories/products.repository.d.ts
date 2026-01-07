import type { Prisma, Product } from "@prisma/client";
import type { CreateProductInput, UpdateProductInput } from "../utils/validators/product.validator.js";
import type { ProductStatsResult } from "../types/products.types.js";
export type ProductWithCategory = Product & {
    category?: {
        name: string;
    };
};
export declare const productRepository: {
    getAll: ({ skip, take, where, orderBy, }: {
        skip: number;
        take: number;
        where?: Prisma.ProductWhereInput;
        orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    }) => Promise<{
        products: ProductWithCategory[];
        total: number;
    }>;
    findById: (id: string) => Promise<Product | null>;
    create: (data: CreateProductInput) => Promise<Product>;
    update: (id: string, data: UpdateProductInput) => Promise<Product>;
    delete: (id: string) => Promise<Product>;
    incrementSales: (id: string, quantity: number) => Promise<{
        id: string;
    }>;
    incrementViewCount: (id: string, count: number) => Promise<{
        id: string;
    }>;
    deleteMany: (ids: string[]) => Promise<number>;
    getFilterCounts: () => Promise<ProductStatsResult>;
    getTopProducts: (limit?: number) => Promise<Product[]>;
};
//# sourceMappingURL=products.repository.d.ts.map