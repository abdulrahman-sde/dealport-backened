import type { Customer, Prisma } from "@prisma/client";
import type { SafeCustomer } from "../types/auth.types.js";
export declare const customerRepository: {
    findById(id: string): Promise<SafeCustomer | null>;
    findByEmail(email: string): Promise<Customer | null>;
    create(data: Prisma.CustomerCreateInput): Promise<SafeCustomer>;
    update(id: string, data: Prisma.CustomerUpdateInput): Promise<SafeCustomer>;
    updateStats(id: string, amount: number): Promise<{
        id: string;
    }>;
    delete(id: string): Promise<Customer>;
    findAll(params: {
        skip: number;
        take: number;
        where: Prisma.CustomerWhereInput;
        orderBy: Prisma.CustomerOrderByWithRelationInput;
    }): Promise<{
        customers: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: import("@prisma/client").$Enums.CustomerRole;
            status: import("@prisma/client").$Enums.CustomerStatus;
            phone: string | null;
            createdAt: Date;
            isGuest: boolean;
            totalOrders: number;
            totalSpent: number;
        }[];
        total: number;
    }>;
    convertGuestToRegistered(email: string, password: string): Promise<SafeCustomer>;
};
//# sourceMappingURL=customers.repository.d.ts.map