import mongoose from "mongoose";
import {model, Schema} from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//db connection
async function main(){

      try{
            await mongoose.connect(process.env.MONGODB_CONNECT_URL as string)
     
          console.log("monogdb connection successfully ");
      }
    catch(error:any){
          console.log("connection error:" ,error.message);
     };  
}
main();



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



