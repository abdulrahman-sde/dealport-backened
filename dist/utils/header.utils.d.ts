import type { Request } from "express";
export declare const getNormalizedHeaders: (req: Request) => {
    userAgent: string;
    country: string | undefined;
    city: string | undefined;
    device: string;
    browser: string | undefined;
    os: string | undefined;
    ip: string;
};
//# sourceMappingURL=header.utils.d.ts.map