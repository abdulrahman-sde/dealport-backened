import { reviewsService } from "../../services/reviews.service.js";
import { createReviewSchema } from "../../utils/validators/review.validator.js";
export const reviewsController = {
    async addReview(req, res) {
        const validatedData = createReviewSchema.parse(req.body);
        const review = await reviewsService.addReview(validatedData);
        res.status(201).json({
            status: "success",
            data: review,
        });
    },
    async getProductReviews(req, res) {
        const { productId } = req.params;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        if (!productId) {
            res
                .status(400)
                .json({ status: "error", message: "Product ID is required" });
            return;
        }
        const { reviews, total } = await reviewsService.getProductReviews(productId, page, limit);
        res.json({
            status: "success",
            data: reviews,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        });
    },
    async getAllReviews(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const { reviews, total } = await reviewsService.getAllReviews(page, limit);
        res.json({
            status: "success",
            data: reviews,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        });
    },
};
//# sourceMappingURL=reviews.controller.js.map