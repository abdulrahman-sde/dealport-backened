import { reviewsRepository } from "../repositories/reviews.repository.js";
export const reviewsService = {
    async addReview(input) {
        const { productId, customerId, rating, comment } = input;
        const review = await reviewsRepository.create({
            product: { connect: { id: productId } },
            ...(customerId && { customer: { connect: { id: customerId } } }),
            rating,
            comment,
        });
        await reviewsRepository.updateProductRatings(productId, rating);
        return review;
    },
    async getProductReviews(productId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        return reviewsRepository.findByProductId(productId, skip, limit);
    },
    async getAllReviews(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        return reviewsRepository.findAll(skip, limit);
    },
};
//# sourceMappingURL=reviews.service.js.map