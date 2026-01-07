import type { Prisma } from "@prisma/client";
import type { Session } from "@prisma/client";
export declare const sessionRepository: {
    create(data: Prisma.SessionCreateInput): Promise<Session>;
    createEvent(data: Prisma.SessionEventUncheckedCreateInput): Promise<{
        id: string;
        timestamp: Date;
        page: string | null;
        sessionId: string;
        productId: string | null;
        eventType: string;
        metadata: Prisma.JsonValue | null;
    }>;
    findAll(): Promise<{
        id: string;
        country: string | null;
        type: import("@prisma/client").$Enums.SessionType;
        customerId: string | null;
        sessionId: string;
        ipAddress: string;
        userAgent: string;
        city: string | null;
        visitorId: string | null;
        device: string | null;
        browser: string | null;
        os: string | null;
        startedAt: Date;
        lastSeenAt: Date;
        converted: boolean;
        orderId: string | null;
    }[]>;
};
//# sourceMappingURL=session.repository.d.ts.map