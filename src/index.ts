import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes";
dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 9000;

const allowedOrigins = [
  "http://localhost:3000",
  "https://nexop-next.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  if (req.originalUrl === "/api/storefront/stripe/webhook") {
    express.raw({ type: "application/json" })(req, res, next);
  } else {
    express.json()(req, res, next);
  }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).json({ error: err.message });
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on: PORT-${PORT}`);
});
