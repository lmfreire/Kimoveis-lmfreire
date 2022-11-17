import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRouter from "./routes/userRouter";
import loginRouter from "./routes/userLoginRouter";

import { Request, Response, NextFunction } from "express";
import { AppError } from "./errors/appError";
import categoriesRouter from "./routes/categoriesRouter";
import propertiesRouter from "./routes/propertiesRouter";
import schedulesRouter from "./routes/schedulesRouter";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/categories", categoriesRouter);
app.use("/properties", propertiesRouter);
app.use("/schedules", schedulesRouter);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

export default app;
