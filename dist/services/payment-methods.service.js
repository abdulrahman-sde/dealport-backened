import { paymentMethodsRepository } from "../repositories/payment-methods.repository.js";
export const paymentMethodsService = {
    async createPaymentMethod(data) {
        return paymentMethodsRepository.create(data);
    },
    async getAllPaymentMethods() {
        return paymentMethodsRepository.findAll();
    },
    async getPaymentMethodById(id) {
        const method = await paymentMethodsRepository.findById(id);
        if (!method)
            throw new Error("Payment method not found");
        return method;
    },
    async updatePaymentMethod(id, data) {
        return paymentMethodsRepository.update(id, data);
    },
    async deletePaymentMethod(id) {
        return paymentMethodsRepository.delete(id);
    },
};
//# sourceMappingURL=payment-methods.service.js.map