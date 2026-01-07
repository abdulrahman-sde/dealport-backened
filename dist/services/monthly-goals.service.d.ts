import type { Prisma } from "@prisma/client";
export declare const monthlyGoalsService: {
    createMonthlyGoal(data: {
        month: string;
        goalAmount: number;
        createdBy?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        month: string;
        goalAmount: number;
        createdBy: string | null;
        achievedAmount: number | null;
    }>;
    getMonthlyGoals(params: {
        skip: number;
        take: number;
        where?: Prisma.MonthlyGoalWhereInput;
    }): Promise<{
        items: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            month: string;
            goalAmount: number;
            createdBy: string | null;
            achievedAmount: number | null;
        }[];
        total: number;
    }>;
    getMonthlyGoalById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        month: string;
        goalAmount: number;
        createdBy: string | null;
        achievedAmount: number | null;
    }>;
};
export default monthlyGoalsService;
//# sourceMappingURL=monthly-goals.service.d.ts.map