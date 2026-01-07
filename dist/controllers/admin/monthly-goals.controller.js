import { monthlyGoalsService } from "../../services/monthly-goals.service.js";
import { successResponse, paginatedResponse } from "../../utils/response.js";
import { createMonthlyGoalSchema } from "../../utils/validators/monthly-goal.validator.js";
export const listMonthlyGoals = async (req, res) => {
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 20);
    const skip = (page - 1) * limit;
    const { items, total } = await monthlyGoalsService.getMonthlyGoals({
        skip,
        take: limit,
    });
    const totalPages = Math.ceil(total / limit);
    const pagination = {
        page,
        limit,
        total,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
    };
    res.json({ ...paginatedResponse(items, pagination) });
};
export const createMonthlyGoal = async (req, res) => {
    const body = createMonthlyGoalSchema.parse(req.body);
    const created = await monthlyGoalsService.createMonthlyGoal(body);
    res.status(201).json(successResponse(created, "Monthly goal created"));
};
export const getMonthlyGoal = async (req, res) => {
    const { id } = req.params;
    const item = await monthlyGoalsService.getMonthlyGoalById(id ? id : "");
    res.json(successResponse(item));
};
export default {
    listMonthlyGoals,
    createMonthlyGoal,
    getMonthlyGoal,
};
//# sourceMappingURL=monthly-goals.controller.js.map