// ts express
import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import { Userroute } from './Routes/Users-route.js';
import { Contentroute } from './Routes/Contents-route.js';
import { Brainroute } from './Routes/Link-route.js';

import cors from "cors"
const app = express();
app.use(express.json());

// CORS Configuration
const allowedOrigins = [
  /^http:\/\/localhost:\d+$/,   // any localhost port
  /^chrome-extension:\/\//,     // chrome extensions
  "https://frontend-cortexmark.vercel.app",  // frontend deploy URL
  process.env.FRONTEND_URL      // fallback to environment variable
].filter(Boolean) as (string | RegExp)[]; // remove undefined entries

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
        console.log("🚫 Blocked by CORS:", origin);
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

// Health check endpoint
app.get("/api/v1/user/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

const PORT = process.env.PORT || 3009;

// Only start the server if not in serverless environment (Vercel)
if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export app for serverless environments (Vercel)
export default app;

