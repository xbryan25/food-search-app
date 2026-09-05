import express, { Request, Response, NextFunction } from "express";
import apiRoutes from "./routes/search.route";

const app = express();
app.use(express.json());

// Register API routes with prefix
app.use("/api", apiRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("❌ Uncaught Express Error:", err);

  const statusCode = err.statusCode || err.status || 500;
  res.status(statusCode).json({
    status: "error",
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
});

app.listen(4000, () => console.log("🚀 Server running on port 4000"));