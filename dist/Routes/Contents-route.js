import express from "express";
import { ContentModel } from "../Db/db.js";
import { userMiddleware } from "../Middleware/middleware.js";
export const Contentroute = express.Router();
Contentroute.post("/addcontent", userMiddleware, async (req, res) => {
    const type = req.body.type;
    const title = req.body.title;
    const link = req.body.link;
    try {
        await ContentModel.create({
            title,
            link,
            type,
            tages: [],
            userId: req.userId,
        });
        return res.status(200).json({
            message: "Content added successfully😊"
        });
    }
    catch (err) {
        res.status(504).json({
            message: "You are not Signin...",
            error: err
        });
    }
});
Contentroute.get("/viewcontent", userMiddleware, async (req, res) => {
    const userId = req.userId;
    try {
        const contents = await ContentModel.find({
            userId: userId
        }).populate("userId", "username");
        res.json({
            message: "see my content ! have a nice day",
            content: contents
        });
    }
    catch (err) {
        res.status(504).json({
            message: "Something went to be wrong ...",
            error: err
        });
    }
});
Contentroute.delete("/deletecontent/:contentId", userMiddleware, async (req, res) => {
    const contentId = req.params.contentId;
    console.log(contentId);
    console.log("DELETE request for:", contentId, "by user:", req.userId);
    try {
        const result = await ContentModel.deleteOne({
            _id: contentId,
            userId: req.userId,
        });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Content not found or not authorized" });
        }
        res.json({ message: "Deleted content successfully " });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        res.status(503).json({
            message: "Something went wrong while deleting content",
            error: errorMessage,
        });
    }
});
//# sourceMappingURL=Contents-route.js.map