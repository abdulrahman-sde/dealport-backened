import { prisma } from "../lib/prisma.js";
export const couponsRepository = {
    async findById(id) {
        return prisma.coupon.findUnique({ where: { id } });
    },
    async findByCode(code) {
        return prisma.coupon.findUnique({ where: { code } });
    },
    async create(data) {
        return prisma.coupon.create({ data });
    },
    async update(id, data) {
        return prisma.coupon.update({ where: { id }, data });
    },
    async delete(id) {
        return prisma.coupon.delete({ where: { id } });
    },
    async findAll(params) {
        const [coupons, total] = await Promise.all([
            prisma.coupon.findMany({
                skip: params.skip,
                take: params.take,
                where: params.where,
                orderBy: params.orderBy,
            }),
            prisma.coupon.count({ where: params.where }),
        ]);
        return { coupons, total };
    },
    async incrementUsage(id) {
        return prisma.coupon.update({
            where: { id },
            data: { usageCount: { increment: 1 } },
            select: { id: true, usageCount: true },
        });
    },
    async deleteMany(ids) {
        const result = await prisma.coupon.deleteMany({
            where: { id: { in: ids } },
        });
        return result.count;
    },
};
//# sourceMappingURL=coupons.repository.js.map