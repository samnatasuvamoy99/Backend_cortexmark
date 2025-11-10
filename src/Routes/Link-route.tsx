import jwt from 'jsonwebtoken';

import express from "express";
import mongoose from "mongoose";
import { LinkModel } from "../Db/db.js"
import{ContentModel} from "../Db/db.js"
import { UserModel } from "../Db/db.js";
import { Random } from "../utils.js";
import { userMiddleware } from "../Middleware/middleware.js"
import { Router } from "express";
export const Brainroute=express.Router();

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

Brainroute.post("/brain/share",userMiddleware, async (req, res) => {
  
    try{
        const share = req.body.share;
    if (share){
   
        const existingLink = await LinkModel.findOne({
          userId: req.userId
        })

        if (existingLink) {
           res.json({
            hash: existingLink.hash
          })
          return;
        }
        else {
      
          const hash = Random(15);
          await LinkModel.create({
            hash: hash,
            userId: req.userId,

          })
           res.json({
            hash: hash
          })
        }

      }
       
    else {
      await LinkModel.deleteMany({
        userId: req.userId
      })
     res.json({
        message: "Remove the link"
      })
      return;
    
    }
     
  }
  
  catch (error) {
    res.status(503).json({
      message: "Something went to be wrong",
      error: error

    })
  }

})


Brainroute.get("/brain/:shareLink",async (req, res) => {

  const hashlink = req.params.shareLink;
  console.log(hashlink);

  try {
    const links = await LinkModel.findOne({
       hash:hashlink,
    })
  
    if (!links) {
       return res.status(404).json({
        message: "Something went ot be wrong share link is invalid❌"
      })
      
    }
  
    //userId
    const contents = await ContentModel.find({
      userId: links.userId
    })

    //aslo take contents that users 
  
    const user = await UserModel.findOne({
      _id: links.userId
    })
  
    if (!user) {
      res.json({
        message: "Something went to be wrong check the link "
      })
      return;
    }
  
    res.json({
      username: user.username,
      content: contents
    })
  } catch (error) {
      res.status(503).json({
      message: "Something went wrong",
      error: error ,
    });
  }
})

