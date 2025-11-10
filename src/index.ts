// ts express
import  express  from 'express';
import {Userroute} from './Routes/Users-route.js';
import {Contentroute} from './Routes/Contents-route.js';
import {Brainroute} from './Routes/Link-route.js';

import cors from "cors"
const app=express();
app.use(express.json());


// app.use(cors({
//   origin: [
//     "http://localhost:5173",  
//     "chrome-extension://*",   
//   ],
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true
// }));

app.use(
  cors({
    origin: (origin, callback) => {
     
      if (!origin) return callback(null, true);

      
      const allowedOrigins = [
        /^http:\/\/localhost:\d+$/,        // any localhost port
        /^chrome-extension:\/\//,          // chrome extensions
        "https://deploy-cortex-mark.vercel.app"  // frontend deploy URL
      ];

      if (allowedOrigins.some((regex) => {
        if (typeof regex === 'string') {
          return origin === regex;
        }
        return regex.test(origin);
      })) {
        callback(null, true);
      } else {
        console.log(" Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);






app.use("/api/v1/user",Userroute);

app.use("/api/v1/content",Contentroute);

app.use("/api/v1/links", Brainroute);

// Health check endpoint
app.get("/api/v1/user/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

const PORT = process.env.PORT || 3009;

// Only start the server if not in serverless environment (Vercel)
if (process.env.VERCEL !== '1') {
  app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export app for serverless environments (Vercel)
export default app;

