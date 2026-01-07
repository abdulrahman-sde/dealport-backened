import { prisma } from "../lib/prisma.js";
export const categoryRepository = {
    async existsById(id) {
        const count = await prisma.category.count({ where: { id } });
        return count > 0;
    },
    async findById(id) {
        return prisma.category.findUnique({
            where: { id },
            include: {
                _count: {
                    select: {
                        products: true,
                    },
                },
            },
        });
    },
    async findBySlug(slug) {
        return prisma.category.findUnique({
            where: { slug },
        });
    },
    async findMany() {
        const categories = await prisma.category.findMany({
            include: {
                _count: {
                    select: {
                        products: true,
                    },
                },
            },
        });
        return { categories };
    },
    async create(data) {
        return prisma.category.create({
            data: { ...data, deletedAt: null },
            include: {
                _count: {
                    select: {
                        products: true,
                    },
                },
            },
        });
    },
    async update(id, data) {
        return prisma.category.update({
            where: { id },
            data,
            include: {
                _count: {
                    select: {
                        products: true,
                    },
                },
            },
        });
    },
    async delete(id) {
        return prisma.category.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    },
    async existsByName(name) {
        const count = await prisma.category.count({
            where: {
                name,
            },
        });
        return count > 0;
    },
    async existsBySlug(slug) {
        const count = await prisma.category.count({
            where: {
                slug,
            },
        });
        return count > 0;
    },
};
//# sourceMappingURL=categories.repository.js.map