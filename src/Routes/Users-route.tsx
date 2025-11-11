import { UserModel } from "../Db/db.js";
import jwt from 'jsonwebtoken';
import express from "express";
import { z } from "zod";
import bcrypt from "bcryptjs";
export const Userroute = express.Router();



const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signinSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});


Userroute.post("/signup", async (req, res) => {
  try {

    const parsed = signupSchema.parse(req.body);


    const hashedPassword = await bcrypt.hash(parsed.password, 10);


    await UserModel.create({
      username: parsed.username,
      email: parsed.email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User signed up successfully " });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({ errors: error.errors });
    }
    // Handle duplicate key error (MongoDB)
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern || {})[0];
      if (field) {
        return res.status(409).json({ 
          message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists. Please use a different ${field}.` 
        });
      }
      return res.status(409).json({ 
        message: "A user with this information already exists. Please use different credentials." 
      });
    }
    console.error("Signup error:", error);
    res.status(500).json({ message: "Something went wrong during signup.", error: error.message });
  }
});

Userroute.post("/signin", async (req, res) => {
  try {

    const parsed = signinSchema.parse(req.body);

    const { email, password } = parsed;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    const user = await UserModel.findOne({
      email
    })

    if (!user) {


      return res.status(403).json({
        message: " your emailid and password incorrect!!"
      })
    }

    if (!user.password) {
      return res.status(500).json({
        message: "User has no password set"
      })
    }

    const password_match = await bcrypt.compare(password, user.password);

    if (password_match) {
      if (!process.env.JWT_PASSWORD) {
        console.error("JWT_PASSWORD environment variable is not set");
        return res.status(500).json({
          message: "Server configuration error. Please contact support."
        });
      }
      const token = jwt.sign({
        id: user._id.toString()
      }, process.env.JWT_PASSWORD as string)

      res.json({
        token
      })
    }
    else {
      return res.status(403).json({
        message: "invalid login details !!"
      })
    }
  }
  catch (error: any) {
    console.log("Invalid details Please try again later", error.message);
    res.status(403).json({
      message: "Your login details are invalid"
    })
  }
})
