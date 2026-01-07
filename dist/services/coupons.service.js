import { couponsRepository } from "../repositories/coupons.repository.js";
import { NotFoundError, ConflictError, ValidationError, } from "../utils/errors.js";
export const couponsService = {
    async getCoupons(query) {
        const { page, limit, search, status, type, sortBy, sortOrder } = query;
        const where = {};
        const andConditions = [];
        if (search) {
            where.OR = [
                { name: { contains: search, mode: "insensitive" } },
                { code: { contains: search, mode: "insensitive" } },
            ];
        }
        if (status)
            andConditions.push({ status });
        if (type)
            andConditions.push({ type });
        if (andConditions.length > 0) {
            where.AND = andConditions;
        }
        const skip = (page - 1) * limit;
        const { coupons, total } = await couponsRepository.findAll({
            skip,
            take: limit,
            where,
            orderBy: { [sortBy]: sortOrder },
        });
        return {
            data: coupons,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
                hasNextPage: page * limit < total,
                hasPrevPage: page > 1,
            },
        };
    },
    async getCouponById(id) {
        const coupon = await couponsRepository.findById(id);
        if (!coupon)
            throw new NotFoundError("Coupon not found");
        return coupon;
    },
    async createCoupon(input) {
        const existing = await couponsRepository.findByCode(input.code);
        if (existing)
            throw new ConflictError(`Coupon code '${input.code}' already exists`);
        const data = {
            ...input,
            appliesTo: input.appliesTo ?? undefined, // Handle optional JSON
        };
        return await couponsRepository.create(data);
    },
    async updateCoupon(id, input) {
        const coupon = await couponsRepository.findById(id);
        if (!coupon)
            throw new NotFoundError("Coupon not found");
        if (input.code && input.code !== coupon.code) {
            const existing = await couponsRepository.findByCode(input.code);
            if (existing)
                throw new ConflictError(`Coupon code '${input.code}' already exists`);
        }
        return await couponsRepository.update(id, input);
    },
    async deleteCoupon(id) {
        const coupon = await couponsRepository.findById(id);
        if (!coupon)
            throw new NotFoundError("Coupon not found");
        return await couponsRepository.delete(id);
    },
    async bulkDeleteCoupons(ids) {
        if (!ids || ids.length === 0) {
            throw new ValidationError("IDs are required for bulk delete");
        }
        const deletedCount = await couponsRepository.deleteMany(ids);
        return deletedCount;
    },
    async validateAndApplyCoupon(couponCode, subtotal, shippingFee) {
        const coupon = await couponsRepository.findByCode(couponCode);
        if (!coupon) {
            throw new ValidationError(`No coupon found with code: ${couponCode}`);
        }
        if (coupon.status !== "ACTIVE") {
            throw new ValidationError(`Coupon '${couponCode}' is not active`);
        }
        const now = new Date();
        if (coupon.startDate > now) {
            throw new ValidationError(`Coupon '${couponCode}' is not yet valid. Valid from ${coupon.startDate.toDateString()}`);
        }
        if (coupon.endDate && coupon.endDate < now) {
            throw new ValidationError(`Coupon '${couponCode}' has expired on ${coupon.endDate.toDateString()}`);
        }
        if (coupon.usageLimit !== null && coupon.usageCount >= coupon.usageLimit) {
            throw new ValidationError(`Coupon '${couponCode}' has reached its usage limit`);
        }
        let discountAmount = 0;
        switch (coupon.type) {
            case "FIXED":
            case "PRICE_DISCOUNT":
                discountAmount = Math.min(coupon.value, subtotal);
                break;
            case "PERCENTAGE":
                discountAmount = (subtotal * coupon.value) / 100;
                break;
            case "FREE_SHIPPING":
                discountAmount = shippingFee;
                break;
            default:
                throw new ValidationError(`Unsupported coupon type: ${coupon.type}`);
        }
        discountAmount = Math.max(0, discountAmount);
        return {
            coupon,
            discountAmount,
        };
    },
};
//# sourceMappingURL=coupons.service.js.map