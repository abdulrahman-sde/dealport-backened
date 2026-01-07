import { paymentMethodsService } from "../../services/payment-methods.service.js";
import { createPaymentMethodSchema, updatePaymentMethodSchema, } from "../../utils/validators/payment-method.validator.js";
export const paymentMethodsController = {
    async createPaymentMethod(req, res) {
        const validatedData = createPaymentMethodSchema.parse(req.body);
        const method = await paymentMethodsService.createPaymentMethod(validatedData);
        res.status(201).json({
            status: "success",
            data: method,
        });
    },
    async getAllPaymentMethods(_req, res) {
        const methods = await paymentMethodsService.getAllPaymentMethods();
        res.json({
            status: "success",
            data: methods,
        });
    },
    async getPaymentMethodById(req, res) {
        const { id } = req.params;
        if (!id)
            throw new Error("ID is required");
        const method = await paymentMethodsService.getPaymentMethodById(id);
        res.json({
            status: "success",
            data: method,
        });
    },
    async updatePaymentMethod(req, res) {
        const { id } = req.params;
        if (!id)
            throw new Error("ID is required");
        const validatedData = updatePaymentMethodSchema.parse(req.body);
        const method = await paymentMethodsService.updatePaymentMethod(id, validatedData);
        res.json({
            status: "success",
            data: method,
        });
    },
    async deletePaymentMethod(req, res) {
        const { id } = req.params;
        if (!id)
            throw new Error("ID is required");
        await paymentMethodsService.deletePaymentMethod(id);
        res.json({
            status: "success",
            message: "Payment method deleted successfully",
        });
    },
};
//# sourceMappingURL=payment-methods.controller.js.map