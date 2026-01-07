import type { GetCustomersQuery, UpdateCustomerInput, CreateCustomerInput } from "../utils/validators/customer.validator.js";
export declare const customersService: {
    getCustomers(query: GetCustomersQuery): Promise<{
        data: {
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
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
            hasNextPage: boolean;
            hasPrevPage: boolean;
        };
    }>;
    getCustomerById(id: string): Promise<import("../types/auth.types.js").SafeCustomer>;
    updateCustomer(id: string, data: UpdateCustomerInput): Promise<import("../types/auth.types.js").SafeCustomer>;
    deleteCustomer(id: string): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        password: string | null;
        role: import("@prisma/client").$Enums.CustomerRole;
        status: import("@prisma/client").$Enums.CustomerStatus;
        avatar: string | null;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        tags: string[];
        notes: string | null;
        isGuest: boolean;
        emailVerified: boolean;
        country: string | null;
        totalOrders: number;
        totalSpent: number;
        averageOrderValue: number;
        lastOrderDate: Date | null;
        address: {
            street: string;
            address2: string | null;
            city: string;
            state: string | null;
            country: string;
            postalCode: string;
            phone: string | null;
            apartment: string | null;
            isDefault: boolean | null;
        } | null;
    }>;
    createCustomer(input: CreateCustomerInput): Promise<import("../types/auth.types.js").SafeCustomer>;
};
//# sourceMappingURL=customers.service.d.ts.map