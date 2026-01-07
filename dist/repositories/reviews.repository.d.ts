import type { Prisma } from "@prisma/client";
export declare const reviewsRepository: {
    create(data: Prisma.ReviewCreateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string | null;
        rating: number;
        comment: string | null;
        productId: string;
    }>;
    updateProductRatings(productId: string, rating: number): Promise<{
        name: string;
        id: string;
        status: import("@prisma/client").$Enums.ProductStatus;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        tags: string[];
        slug: string;
        description: string;
        sku: string;
        price: number;
        costPrice: number | null;
        discountPrice: number | null;
        stockQuantity: number;
        lowStockThreshold: number;
        isUnlimitedStock: boolean;
        images: string[];
        thumbnail: string | null;
        categoryId: string;
        colors: string[];
        isFeatured: boolean;
        expirationStart: Date | null;
        expirationEnd: Date | null;
        totalSales: number;
        totalRevenue: number;
        viewCount: number;
        averageRating: number;
        ratingCount: number;
    }>;
    findByProductId(productId: string, skip: number, take: number): Promise<{
        reviews: ({
            customer: {
                firstName: string;
                lastName: string;
                avatar: string | null;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerId: string | null;
            rating: number;
            comment: string | null;
            productId: string;
        })[];
        total: number;
    }>;
    findAll(skip: number, take: number): Promise<{
        reviews: ({
            customer: {
                firstName: string;
                lastName: string;
                avatar: string | null;
            } | null;
            product: {
                name: string;
                thumbnail: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerId: string | null;
            rating: number;
            comment: string | null;
            productId: string;
        })[];
        total: number;
    }>;
};
//# sourceMappingURL=reviews.repository.d.ts.map