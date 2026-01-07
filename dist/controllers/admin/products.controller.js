import { productsService } from "../../services/products.service.js";
import { ValidationError } from "../../utils/errors.js";
import { paginatedResponse, successResponse } from "../../utils/response.js";
import { createProductSchema, getProductsQuerySchema, updateProductSchema, } from "../../utils/validators/product.validator.js";
import { bulkDeleteProductsSchema } from "../../utils/validators/product.validator.js";
export const getAllProducts = async (req, res) => {
    const query = getProductsQuerySchema.parse(req.query);
    const { data, pagination, meta } = await productsService.getProducts(query);
    res.status(200).json({
        ...paginatedResponse(data, pagination, "Products fetched successfully"),
        meta,
    });
};
export const getProductById = async (req, res) => {
    const { id } = req.params;
    if (!id)
        throw new ValidationError("Product id is required");
    const product = await productsService.getProductById(id);
    res
        .status(200)
        .json(successResponse(product, "Product retrieved successfully"));
};
export const createProduct = async (req, res) => {
    const validatedData = createProductSchema.parse(req.body);
    const product = await productsService.createProduct(validatedData);
    res
        .status(201)
        .json(successResponse(product, "Product created successfully"));
};
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    if (!id)
        throw new ValidationError("Product id is required");
    const validatedData = updateProductSchema.parse(req.body);
    const product = await productsService.updateProduct(id, validatedData);
    res
        .status(200)
        .json(successResponse(product, "Product updated successfully"));
};
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!id)
        throw new ValidationError("Product id is required");
    await productsService.deleteProduct(id);
    res.status(200).json(successResponse(null, "Product deleted successfully"));
};
export const bulkDeleteProducts = async (req, res) => {
    const { ids } = bulkDeleteProductsSchema.parse(req.body);
    const deletedCount = await productsService.bulkDeleteProducts(ids);
    res
        .status(200)
        .json(successResponse({ deleted: deletedCount }, `${deletedCount} products deleted`));
};
//# sourceMappingURL=products.controller.js.map