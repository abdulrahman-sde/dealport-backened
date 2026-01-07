import jwt from "jsonwebtoken";
export const generateTokens = (payload) => {
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "15m",
    });
    const refreshToken = jwt.sign({ userId: payload.userId, type: payload.type }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
    return { accessToken, refreshToken };
};
export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};
//# sourceMappingURL=jwt.js.map