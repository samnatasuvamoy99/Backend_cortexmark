import jwt from "jsonwebtoken";
export const userMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }
    try {
        const decoded = jwt.verify(authHeader, process.env.JWT_PASSWORD);
        if (decoded) {
            // @ts-ignore
            req.userId = decoded.id;
            next();
        }
    }
    catch (err) {
        res.status(403).json({
            message: "you are not logged in"
        });
    }
};
//# sourceMappingURL=middleware.js.map