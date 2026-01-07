import { paginatedResponse, successResponse } from "../../utils/response.js";
import { ordersService } from "../../services/orders.service.js";
import { getOrdersQuerySchema, updateOrderSchema, } from "../../utils/validators/order.validator.js";
export const listOrders = async (req, res) => {
    const query = getOrdersQuerySchema.parse(req.query);
    const { data, pagination, meta } = await ordersService.getOrders(query);
    return res.json({
        ...paginatedResponse(data, pagination),
        meta,
    });
};
export const updateOrder = async (req, res) => {
    const { id } = req.params;
    if (!id)
        throw new Error("Order ID is required");
    const validated = updateOrderSchema.parse(req.body);
    const order = await ordersService.updateOrder(id, validated);
    return res.json(successResponse(order, "Order status updated successfully"));
};
//# sourceMappingURL=orders.controller.js.map