import type { Request, Response } from "express";
/**
 * Get reports data for a specific date range
 */
export declare const getReportsData: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
/**
 * Get customer demographics (all-time)
 */
export declare const getCustomerDemographics: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
/**
 * Get top customers by spending
 */
export declare const getTopCustomers: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
/**
 * Get top products by sales
 */
export declare const getTopProducts: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
/**
 * Get active sessions from Redis
 */
export declare const getActiveSessions: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
/**
 * Get device analytics
 */
export declare const getDeviceAnalytics: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
//# sourceMappingURL=reports.controller.d.ts.map