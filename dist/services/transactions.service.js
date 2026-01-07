import { transactionsRepository } from "../repositories/transactions.repository.js";
import { getSkipTake, getPaginationMeta, buildDateRangeFilter, } from "../utils/query.utils.js";
export const transactionsService = {
    async getTransactions(query) {
        const { page, limit, search, paymentStatus, storePaymentMethodId, startDate, endDate, sortBy, sortOrder, } = query;
        const where = {};
        const and = [];
        if (paymentStatus)
            and.push({ paymentStatus: paymentStatus });
        if (storePaymentMethodId)
            and.push({ storePaymentMethodId });
        if (search) {
            const searchTerms = search.trim().split(/\s+/);
            const orConditions = [
                { transactionNumber: { contains: search, mode: "insensitive" } },
                {
                    order: {
                        orderNumber: { contains: search, mode: "insensitive" },
                    },
                },
                { customer: { email: { contains: search, mode: "insensitive" } } },
            ];
            if (searchTerms.length > 0) {
                orConditions.push({
                    customer: {
                        AND: searchTerms.map((term) => ({
                            OR: [
                                { firstName: { contains: term, mode: "insensitive" } },
                                { lastName: { contains: term, mode: "insensitive" } },
                            ],
                        })),
                    },
                });
            }
            if (/^[0-9a-fA-F]{24}$/.test(search)) {
                orConditions.push({ id: search });
                orConditions.push({ customerId: search });
            }
            and.push({ OR: orConditions });
        }
        const dateFilter = buildDateRangeFilter(startDate, endDate);
        if (dateFilter)
            and.push({ createdAt: dateFilter });
        if (and.length)
            where.AND = and;
        const orderBy = {
            [sortBy]: sortOrder,
        };
        const { skip, take } = getSkipTake({ page, limit });
        const { transactions, total } = await transactionsRepository.findAll({
            skip,
            take,
            where,
            orderBy,
        });
        return {
            data: transactions,
            pagination: getPaginationMeta(total, { page, limit }),
        };
    },
    async getTransactionById(id) {
        return transactionsRepository.findById(id);
    },
};
//# sourceMappingURL=transactions.service.js.map