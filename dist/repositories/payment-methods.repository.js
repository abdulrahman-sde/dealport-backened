import { prisma } from "../lib/prisma.js";
export const paymentMethodsRepository = {
    async create(data) {
        if (data.isDefault) {
            await prisma.storePaymentMethod.updateMany({
                where: {},
                data: { isDefault: false, status: "INACTIVE" },
            });
        }
        return prisma.storePaymentMethod.create({
            data,
        });
    },
    async findAll() {
        const methods = await prisma.storePaymentMethod.findMany({
            orderBy: [{ isDefault: "desc" }, { createdAt: "desc" }],
        });
        return Promise.all(methods.map(async (method) => {
            const stats = await prisma.transaction.aggregate({
                where: { storePaymentMethodId: method.id },
                _sum: { amount: true },
                _count: { id: true },
            });
            return {
                ...method,
                transactionCount: stats._count.id || 0,
                totalRevenue: stats._sum.amount || 0,
            };
        }));
    },
    async findById(id) {
        return prisma.storePaymentMethod.findUnique({
            where: { id },
        });
    },
    async update(id, data) {
        if (data.isDefault) {
            await prisma.storePaymentMethod.updateMany({
                where: { id: { not: id } },
                data: { isDefault: false, status: "INACTIVE" },
            });
        }
        return prisma.storePaymentMethod.update({
            where: { id },
            data,
        });
    },
    async delete(id) {
        return prisma.storePaymentMethod.delete({
            where: { id },
        });
    },
};
//# sourceMappingURL=payment-methods.repository.js.map