import type { CreateSessionInput, CreateSessionEventInput } from "../types/session.types.js";
export declare const sessionService: {
    createSession({ data }: {
        data: CreateSessionInput;
    }): Promise<{
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
    }>;
    trackEvent(data: CreateSessionEventInput): Promise<{
        id: string;
        timestamp: Date;
        page: string | null;
        sessionId: string;
        productId: string | null;
        eventType: string;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
    }>;
    getAllSessions(): Promise<{
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
//# sourceMappingURL=session.service.d.ts.map