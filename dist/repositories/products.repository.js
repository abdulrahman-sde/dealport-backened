import { prisma } from "../lib/prisma.js";
export const productRepository = {
    getAll: async ({ skip, take, where, orderBy, }) => {
        const [products, total] = await Promise.all([
            prisma.product.findMany({
                skip,
                take,
                orderBy,
                include: {
                    category: {
                        select: {
                            name: true,
                        },
                    },
                },
                where,
            }),
            prisma.product.count({ where }),
        ]);
        return { products, total };
    },
    findById: async (id) => {
        return await prisma.product.findUnique({
            where: {
                id,
            },
        });
    },
    create: async (data) => {
        return await prisma.product.create({
            data: {
                name: data.name,
                slug: data.slug,
                sku: data.sku,
                description: data.description,
                price: data.price,
                costPrice: data.costPrice ?? null,
                discountPrice: data.discountPrice ?? null,
                stockQuantity: data.stockQuantity ?? 0,
                lowStockThreshold: data.lowStockThreshold ?? 10,
                isUnlimitedStock: data.isUnlimitedStock ?? false,
                images: data.images ?? [],
                thumbnail: data.thumbnail ?? null,
                categoryId: data.categoryId,
                tags: data.tags ?? [],
                colors: data.colors ?? [],
                status: data.status ?? "DRAFT", // Handle default & cast
                isFeatured: data.isFeatured ?? false, // Handle default
                expirationStart: data.expirationStart ?? null,
                expirationEnd: data.expirationEnd ?? null,
                deletedAt: null,
            },
        });
    },
    update: async (id, data) => {
        return await prisma.product.update({
            where: { id },
            data: {
                ...data,
                status: data.status,
            },
        });
    },
    delete: async (id) => {
        return await prisma.product.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    },
    incrementSales: async (id, quantity) => {
        return prisma.product.update({
            where: { id },
            data: {
                totalSales: { increment: quantity },
            },
            select: { id: true },
        });
    },
    incrementViewCount: async (id, count) => {
        return prisma.product.update({
            where: { id },
            data: {
                viewCount: { increment: count },
            },
            select: { id: true },
        });
    },
    deleteMany: async (ids) => {
        const result = await prisma.product.updateMany({
            where: { id: { in: ids } },
            data: { deletedAt: new Date() },
        });
        return result.count;
    },
    getFilterCounts: async () => {
        const result = await prisma.product.aggregateRaw({
            pipeline: [
                {
                    $match: {
                        $or: [{ deletedAt: { $exists: false } }, { deletedAt: null }],
                    },
                },
                {
                    $facet: {
                        total: [{ $count: "count" }],
                        featured: [{ $match: { isFeatured: true } }, { $count: "count" }],
                        onSale: [
                            { $match: { discountPrice: { $gt: 0 } } },
                            { $count: "count" },
                        ],
                        outOfStock: [
                            {
                                $match: { stockQuantity: { $lte: 0 }, isUnlimitedStock: false },
                            },
                            { $count: "count" },
                        ],
                    },
                },
            ],
        });
        const facetResult = result[0];
        return {
            all: facetResult?.total[0]?.count ?? 0,
            featured: facetResult?.featured[0]?.count ?? 0,
            onSale: facetResult?.onSale[0]?.count ?? 0,
            outOfStock: facetResult?.outOfStock[0]?.count ?? 0,
        };
    },
    getTopProducts: async (limit = 10) => {
        return prisma.product.findMany({
            where: { deletedAt: null },
            orderBy: { totalSales: "desc" },
            take: limit,
        });
    },
};
//# sourceMappingURL=products.repository.js.map