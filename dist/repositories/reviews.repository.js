import { prisma } from "../lib/prisma.js";
export const reviewsRepository = {
    async create(data) {
        return prisma.review.create({
            data,
        });
    },
    async updateProductRatings(productId, rating) {
        return prisma.$transaction(async (tx) => {
            const product = await tx.product.findUnique({
                where: { id: productId },
                select: { averageRating: true, ratingCount: true },
            });
            if (!product) {
                throw new Error("Product not found");
            }
            const newCount = product.ratingCount + 1;
            const newAverage = (product.averageRating * product.ratingCount + rating) / newCount;
            return tx.product.update({
                where: { id: productId },
                data: {
                    averageRating: newAverage,
                    ratingCount: newCount,
                },
            });
        });
    },
    async findByProductId(productId, skip, take) {
        const [reviews, total] = await Promise.all([
            prisma.review.findMany({
                where: { productId },
                skip,
                take,
                orderBy: { createdAt: "desc" },
                include: {
                    customer: {
                        select: {
                            firstName: true,
                            lastName: true,
                            avatar: true,
                        },
                    },
                },
            }),
            prisma.review.count({ where: { productId } }),
        ]);
        return { reviews, total };
    },
    async findAll(skip, take) {
        const [reviews, total] = await Promise.all([
            prisma.review.findMany({
                skip,
                take,
                orderBy: { createdAt: "desc" },
                include: {
                    product: {
                        select: {
                            name: true,
                            thumbnail: true,
                        },
                    },
                    customer: {
                        select: {
                            firstName: true,
                            lastName: true,
                            avatar: true,
                        },
                    },
                },
            }),
            prisma.review.count(),
        ]);
        return { reviews, total };
    },
};
//# sourceMappingURL=reviews.repository.js.map