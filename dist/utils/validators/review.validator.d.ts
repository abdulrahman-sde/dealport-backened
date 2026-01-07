import { z } from "zod";
export declare const createReviewSchema: z.ZodObject<{
    productId: z.ZodString;
    customerId: z.ZodOptional<z.ZodString>;
    rating: z.ZodNumber;
    comment: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateReviewInput = z.infer<typeof createReviewSchema>;
//# sourceMappingURL=review.validator.d.ts.map