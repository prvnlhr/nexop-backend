import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes";
dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 9000;
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000", // Allow only your frontend origin
    credentials: true, // Allow cookies and credentials
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(cookieParser());
// Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).json({ error: err.message });
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
