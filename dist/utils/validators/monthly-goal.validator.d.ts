import { z } from "zod";
export declare const createMonthlyGoalSchema: z.ZodObject<{
    month: z.ZodString;
    goalAmount: z.ZodNumber;
    createdBy: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateMonthlyGoalInput = z.infer<typeof createMonthlyGoalSchema>;
//# sourceMappingURL=monthly-goal.validator.d.ts.map