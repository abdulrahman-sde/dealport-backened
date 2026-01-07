import { productRepository } from "../repositories/products.repository.js";
import { categoryRepository } from "../repositories/categories.repository.js";
import { ValidationError, NotFoundError } from "../utils/errors.js";
import { getSkipTake, getPaginationMeta } from "../utils/query.utils.js";
export const productsService = {
    async getProducts(query) {
        const { page, limit, search, categoryId, status, isFeatured, hasDiscount, stockStatus, sortBy, sortOrder, } = query;
        const where = {
            deletedAt: null,
        };
        const andConditions = [];
        if (search) {
            where.OR = [
                { name: { contains: search, mode: "insensitive" } },
                { sku: { contains: search, mode: "insensitive" } },
            ];
        }
        if (categoryId)
            andConditions.push({ categoryId });
        if (status)
            andConditions.push({ status: status });
        if (isFeatured)
            andConditions.push({ isFeatured: true });
        if (hasDiscount)
            andConditions.push({ discountPrice: { gt: 0 } });
        if (stockStatus) {
            if (stockStatus === "OUT_OF_STOCK") {
                andConditions.push({
                    stockQuantity: { lte: 0 },
                    isUnlimitedStock: false,
                });
            }
            else if (stockStatus === "LOW_STOCK") {
                andConditions.push({
                    stockQuantity: { gt: 0, lte: 10 },
                    isUnlimitedStock: false,
                });
            }
            else if (stockStatus === "IN_STOCK") {
                andConditions.push({
                    stockQuantity: { gt: 0 },
                    isUnlimitedStock: false,
                });
            }
        }
        if (andConditions.length > 0) {
            where.AND = andConditions;
        }
        const { skip, take } = getSkipTake({ page, limit });
        let orderByParam = undefined;
        if (sortBy === "salesAndRevenue") {
            orderByParam = [
                { totalSales: sortOrder },
                { totalRevenue: sortOrder },
            ];
        }
        else if (sortBy) {
            orderByParam = {
                [sortBy]: sortOrder,
            };
        }
        const [productsResult, stats] = await Promise.all([
            productRepository.getAll({
                skip,
                take,
                where,
                orderBy: orderByParam,
            }),
            productRepository.getFilterCounts(),
        ]);
        const { products, total } = productsResult;
        return {
            data: products,
            pagination: getPaginationMeta(total, { page, limit }),
            meta: {
                all: stats.all,
                featured: stats.featured,
                onSale: stats.onSale,
                outOfStock: stats.outOfStock,
            },
        };
    },
    async getProductById(id) {
        return await productRepository.findById(id);
    },
    async createProduct(data) {
        const categoryExists = await categoryRepository.existsById(data.categoryId);
        if (!categoryExists) {
            throw new ValidationError("Invalid category id");
        }
        return await productRepository.create(data);
    },
    async updateProduct(id, data) {
        const product = await productRepository.findById(id);
        if (!product) {
            throw new NotFoundError("Product not found");
        }
        if (data.categoryId) {
            const categoryExists = await categoryRepository.existsById(data.categoryId);
            if (!categoryExists) {
                throw new ValidationError("Invalid category id");
            }
        }
        return await productRepository.update(id, data);
    },
    async deleteProduct(id) {
        const product = await productRepository.findById(id);
        if (!product) {
            throw new NotFoundError("Product not found");
        }
        return await productRepository.delete(id);
    },
    async bulkDeleteProducts(ids) {
        if (!ids || ids.length === 0) {
            throw new ValidationError("IDs are required for bulk delete");
        }
        const deletedCount = await productRepository.deleteMany(ids);
        return deletedCount;
    },
};
//# sourceMappingURL=products.service.js.map