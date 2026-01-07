import type { LoginInput, RegisterInput, UpdateProfileInput, ChangePasswordInput } from "../utils/validators/auth.validator.js";
export declare const adminAuthService: {
    loginUser({ email, password }: LoginInput): Promise<{
        accessToken: any;
        refreshToken: any;
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: import("@prisma/client").$Enums.UserRole;
            status: import("@prisma/client").$Enums.UserStatus;
            avatar: string | null;
            phone: string | null;
            biography: string | null;
            location: string | null;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            lastLoginAt: Date | null;
        };
    }>;
    registerUser(input: RegisterInput): Promise<{
        accessToken: any;
        refreshToken: any;
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: import("@prisma/client").$Enums.UserRole;
            status: import("@prisma/client").$Enums.UserStatus;
            avatar: string | null;
            phone: string | null;
            biography: string | null;
            location: string | null;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            lastLoginAt: Date | null;
        };
    }>;
    refreshToken(token: string): Promise<{
        accessToken: any;
        refreshToken: any;
    }>;
    logoutUser(userId: string): Promise<void>;
    getUserProfile(id: string): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: import("@prisma/client").$Enums.UserRole;
        status: import("@prisma/client").$Enums.UserStatus;
        avatar: string | null;
        phone: string | null;
        biography: string | null;
        location: string | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        lastLoginAt: Date | null;
    }>;
    updateProfile(id: string, input: UpdateProfileInput): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: import("@prisma/client").$Enums.UserRole;
        status: import("@prisma/client").$Enums.UserStatus;
        avatar: string | null;
        phone: string | null;
        biography: string | null;
        location: string | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        lastLoginAt: Date | null;
    }>;
    changePassword(id: string, { currentPassword, newPassword }: ChangePasswordInput): Promise<void>;
};
//# sourceMappingURL=admin.auth.service.d.ts.map