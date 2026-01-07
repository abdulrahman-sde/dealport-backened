export class AppError extends Error {
    statusCode;
    isOperational;
    constructor(statusCode, message, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Object.setPrototypeOf(this, AppError.prototype);
    }
}
export class ValidationError extends AppError {
    constructor(message) {
        super(400, message);
    }
}
export class UnauthorizedError extends AppError {
    constructor(message = "Unauthorized") {
        super(401, message);
    }
}
export class NotFoundError extends AppError {
    constructor(message = "Not found") {
        super(404, message);
    }
}
export class ConflictError extends AppError {
    constructor(message = "Already exists") {
        super(409, message);
    }
}
export class BadRequestError extends AppError {
    details;
    constructor(message = "Bad request", details) {
        super(400, message);
        this.details = details;
        this.name = "BadRequestError";
    }
}
export class ForbiddenError extends AppError {
    constructor(message = "Forbidden") {
        super(403, message);
        this.name = "ForbiddenError";
    }
}
export class TooManyRequestsError extends AppError {
    constructor(message = "Too many requests, please try again later") {
        super(429, message);
    }
}
export class InternalServerError extends AppError {
    constructor(message = "Internal server error") {
        super(500, message, false); // isOperational = false (unexpected error)
    }
}
//# sourceMappingURL=errors.js.map