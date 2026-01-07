import { monthlyGoalsRepository } from "../repositories/monthly-goals.repository.js";
export const monthlyGoalsService = {
    async createMonthlyGoal(data) {
        const existing = await monthlyGoalsRepository.findByMonth(data.month);
        if (existing)
            throw new Error("Monthly goal for this month already exists");
        return monthlyGoalsRepository.create(data);
    },
    async getMonthlyGoals(params) {
        return monthlyGoalsRepository.findAll(params);
    },
    async getMonthlyGoalById(id) {
        const item = await monthlyGoalsRepository.findById(id);
        if (!item)
            throw new Error("Monthly goal not found");
        return item;
    },
};
export default monthlyGoalsService;
//# sourceMappingURL=monthly-goals.service.js.map