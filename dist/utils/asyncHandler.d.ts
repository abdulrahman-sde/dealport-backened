import type { NextFunction, Request, Response } from "express";
export declare const asyncHandler: (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=asyncHandler.d.ts.map