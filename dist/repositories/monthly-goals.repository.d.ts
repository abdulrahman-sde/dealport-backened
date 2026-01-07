import type { Prisma } from "@prisma/client";
export declare const monthlyGoalsRepository: {
    create(data: {
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
    findAll(params: {
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
    findById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        month: string;
        goalAmount: number;
        createdBy: string | null;
        achievedAmount: number | null;
    } | null>;
    findByMonth(month: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        month: string;
        goalAmount: number;
        createdBy: string | null;
        achievedAmount: number | null;
    } | null>;
};
export default monthlyGoalsRepository;
//# sourceMappingURL=monthly-goals.repository.d.ts.map