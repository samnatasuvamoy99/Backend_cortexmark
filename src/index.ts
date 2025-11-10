
import dotenv from "dotenv";

dotenv.config();


import { connectDatabase } from './Db/db.js';

import express from 'express';
import { Userroute } from './Routes/Users-route.js';
import { Contentroute } from './Routes/Contents-route.js';
import { Brainroute } from './Routes/Link-route.js';

import cors from "cors"
const app = express();
app.use(express.json());




const allowedOrigins = [
  /^http:\/\/localhost:\d+$/,   // any localhost port
  /^chrome-extension:\/\//,     // chrome extensions
  "https://frontend-cortexmark.vercel.app",  // frontend deploy URL
  process.env.FRONTEND_URL      
].filter(Boolean) as (string | RegExp)[]; 

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      const isAllowed = allowedOrigins.some((pattern) => {
        if (typeof pattern === "string") {
          return origin === pattern;
        }
        return pattern.test(origin);
      });

      if (isAllowed) {
        callback(null, true);
      } else {
        console.log("Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use("/api/v1/user", Userroute);

app.use("/api/v1/content", Contentroute);

app.use("/api/v1/links", Brainroute);

app.get("/api/v1/user/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

const PORT = process.env.PORT || 3009;


async function startServer() {
 
  const dbConnected = await connectDatabase();
  
  if (!dbConnected && process.env.NODE_ENV === 'production') {
    console.warn("Warning: Database connection failed, but server will start anyway.");
    console.warn("API endpoints that require database will not work.");
  }

  if (process.env.VERCEL !== '1') {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      if (dbConnected) {
        console.log(`Server is ready to accept requests`);
      } else {
        console.log(`Server started but database is not connected`);
      }
    });
  }
}


startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});

export default app;

