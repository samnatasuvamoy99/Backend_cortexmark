import jwt from "jsonwebtoken";
export const userMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }
    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;
    if (!token) {
        return res.status(401).json({ message: "Invalid token format" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
        if (!decoded || typeof decoded !== "object" || !decoded.id) {
            return res.status(403).json({ message: "Invalid token" });
        }
        req.userId = decoded.id;
        next();
    }
    catch (err) {
        console.error("JWT verification failed:", err);
        return res.status(403).json({ message: "You are not logged in" });
    }
};
//# sourceMappingURL=middleware.js.map