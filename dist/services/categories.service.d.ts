import type { CreateCategoryInput, UpdateCategoryInput } from "../utils/validators/category.validator.js";
export declare const categoriesService: {
    getAllCategories(): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        slug: string;
        visibility: boolean;
        description: string | null;
        image: string | null;
        sortOrder: number;
    }[]>;
    getCategoryById(id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        slug: string;
        visibility: boolean;
        description: string | null;
        image: string | null;
        sortOrder: number;
    }>;
    getCategoryBySlug(slug: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        slug: string;
        visibility: boolean;
        description: string | null;
        image: string | null;
        sortOrder: number;
    }>;
    createCategory(input: CreateCategoryInput): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        slug: string;
        visibility: boolean;
        description: string | null;
        image: string | null;
        sortOrder: number;
    }>;
    updateCategory(id: string, input: UpdateCategoryInput): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        slug: string;
        visibility: boolean;
        description: string | null;
        image: string | null;
        sortOrder: number;
    }>;
    deleteCategory(id: string): Promise<{
        message: string;
    }>;
};
//# sourceMappingURL=categories.service.d.ts.map