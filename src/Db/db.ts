import mongoose from "mongoose";
import {model, Schema} from "mongoose";


export async function connectDatabase(){
      try{
            if (!process.env.MONGODB_CONNECT_URL) {
              console.error("❌ ERROR: MONGODB_CONNECT_URL environment variable is not set");
              console.error("📝 Please create a .env file in the Backend directory with:");
              console.error("   MONGODB_CONNECT_URL=mongodb+srv://username:password@cluster.mongodb.net/database");
              console.error("   JWT_PASSWORD=your-secret-key");
              throw new Error("MONGODB_CONNECT_URL environment variable is not set");
            }
            
            console.log("🔄 Attempting to connect to MongoDB...");
            await mongoose.connect(process.env.MONGODB_CONNECT_URL as string)
     
          console.log("✅ MongoDB connection successful");
          return true;
      }
    catch(error:any){
          console.error("❌ MongoDB connection error:", error.message);
          console.error("💡 Tip: Make sure your .env file exists in the Backend directory");
          console.error("💡 Tip: Verify your MongoDB connection string is correct");
      
          if (process.env.NODE_ENV === 'development') {
            console.error("⚠️  Exiting in development mode due to database connection failure");
            process.exit(1);
          }
          return false;
     };  
}



const UserSchema = new Schema({
      username:{type:String, unique:true},
      email:{type:String, unique:true},
      password:String
})
 export const UserModel= model("users",UserSchema);

 
 const TagSchema = new Schema({
         title:String
 })
 export const TagModel= model("tags",TagSchema);


 const ContentSchema = new Schema({
       title:String,
       type:String,
       link:String,
       tags:[{type:mongoose.Types.ObjectId , ref:'tags'}],
       userId:{type:mongoose.Types.ObjectId , ref:'users' , required:true},
       createdAt: { type: Date, default: Date.now }
})
export const ContentModel = model("contents",ContentSchema);


 const LinkSchema = new Schema({
       hash:String,
       userId:{type:mongoose.Types.ObjectId , ref:'users' , required:true,unique:true}
})
export const LinkModel = model("brainshares",LinkSchema);



