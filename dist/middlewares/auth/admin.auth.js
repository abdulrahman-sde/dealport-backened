import { verifyToken } from "../../lib/jwt.js";
import { UnauthorizedError } from "../../utils/errors.js";
export const authenticateAdmin = async (req, res, next) => {
    try {
        let token = req.cookies.accessToken;
        if (!token) {
            throw new UnauthorizedError("Unauthorized login required");
        }
        const payload = verifyToken(token);
        if (payload.type !== "admin") {
            throw new UnauthorizedError("Admin access required");
        }
        req.user = {
            id: payload.userId,
            email: payload.email,
            role: payload.role,
        };
        next();
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=admin.auth.js.map