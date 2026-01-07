import type { Category } from "@prisma/client";
export type SafeCategory = Omit<Category, "deletedAt">;
//# sourceMappingURL=category.types.d.ts.map