import { randomUUID } from "crypto";
export const generateOrderNumber = () => {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = randomUUID().slice(0, 6).toUpperCase();
    return `ORD-${timestamp}-${random}`;
};
export const generateTransactionNumber = () => {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = randomUUID().slice(0, 8).toUpperCase();
    return `TXN-${timestamp}-${random}`;
};
//# sourceMappingURL=order.utils.js.map