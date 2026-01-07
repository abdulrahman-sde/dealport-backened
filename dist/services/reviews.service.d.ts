import type { CreateReviewInput } from "../utils/validators/review.validator.js";
export declare const reviewsService: {
    addReview(input: CreateReviewInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string | null;
        rating: number;
        comment: string | null;
        productId: string;
    }>;
    getProductReviews(productId: string, page?: number, limit?: number): Promise<{
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
    getAllReviews(page?: number, limit?: number): Promise<{
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
//# sourceMappingURL=reviews.service.d.ts.map