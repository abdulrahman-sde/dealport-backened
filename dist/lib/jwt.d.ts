import type { JWTPayload } from "../types/auth.types.js";
export declare const generateTokens: (payload: JWTPayload) => {
    accessToken: any;
    refreshToken: any;
};
export declare const verifyToken: (token: string) => JWTPayload;
//# sourceMappingURL=jwt.d.ts.map