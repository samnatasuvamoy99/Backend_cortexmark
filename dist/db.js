import mongoose from "mongoose";
import { model, Schema } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { error } from 'node:console';
//db connection
async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT_URL);
        console.log("monogdb connection successfully 🌏");
    }
    catch (error) {
        console.log("connection error:", error.message);
    }
    ;
}
main();
const UserSchema = new Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String
});
export const UserModel = model("User", UserSchema);
const ContentSchema = new Schema({
    type: String,
    link: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
});
export const ContentModel = model("Content", ContentSchema);
//# sourceMappingURL=db.js.map