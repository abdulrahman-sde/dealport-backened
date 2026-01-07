import { prisma } from "../lib/prisma.js";
export const monthlyGoalsRepository = {
    async create(data) {
        return prisma.monthlyGoal.create({ data });
    },
    async findAll(params) {
        const [items, total] = await Promise.all([
            prisma.monthlyGoal.findMany({
                skip: params.skip,
                take: params.take,
                where: params.where,
                orderBy: { month: "desc" },
            }),
            prisma.monthlyGoal.count({ where: params.where }),
        ]);
        return { items, total };
    },
    async findById(id) {
        return prisma.monthlyGoal.findUnique({ where: { id } });
    },
    async findByMonth(month) {
        return prisma.monthlyGoal.findUnique({ where: { month } });
    },
};
export default monthlyGoalsRepository;
//# sourceMappingURL=monthly-goals.repository.js.map