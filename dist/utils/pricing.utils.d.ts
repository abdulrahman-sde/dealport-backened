export declare const calculateOrderPricing: (params: {
    items: {
        unitPrice: number;
        quantity: number;
    }[];
    shippingFee?: number;
    taxRate?: number;
    discountAmount?: number;
    discountPercent?: number;
}) => {
    subtotal: number;
    shippingFee: number;
    taxAmount: number;
    discount: number;
    totalAmount: number;
};
//# sourceMappingURL=pricing.utils.d.ts.map