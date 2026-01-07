import type { User, Prisma } from "@prisma/client";
export declare const userRepository: {
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    create(data: Prisma.UserCreateInput): Promise<User>;
    update(id: string, data: Prisma.UserUpdateInput): Promise<User>;
    delete(id: string): Promise<User>;
};
//# sourceMappingURL=users.repository.d.ts.map