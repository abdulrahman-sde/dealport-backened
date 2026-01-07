import { z } from "zod";
export declare const CreateSessionEventSchema: z.ZodObject<{
    eventType: z.ZodString;
    sessionId: z.ZodString;
    page: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
//# sourceMappingURL=session.validator.d.ts.map