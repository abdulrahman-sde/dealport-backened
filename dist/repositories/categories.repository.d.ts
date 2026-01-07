import type { Category } from "@prisma/client";
import type { CreateCategoryInput, UpdateCategoryInput } from "../utils/validators/category.validator.js";
export declare const categoryRepository: {
    existsById(id: string): Promise<boolean>;
    findById(id: string): Promise<Category | null>;
    findBySlug(slug: string): Promise<Category | null>;
    findMany(): Promise<{
        categories: Category[];
    }>;
    create(data: CreateCategoryInput): Promise<Category>;
    update(id: string, data: UpdateCategoryInput): Promise<Category>;
    delete(id: string): Promise<Category>;
    existsByName(name: string): Promise<boolean>;
    existsBySlug(slug: string): Promise<boolean>;
};
//# sourceMappingURL=categories.repository.d.ts.map