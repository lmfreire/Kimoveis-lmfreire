import { Router } from "express";
import createschedulesController from "../controlller/schedules/createschedulesController";
import listchedulesController from "../controlller/schedules/listchedulesController";
import AuthMiddleware from "../Middlewares/AuthMiddleware";
import isAdmMiddleware from "../Middlewares/isAdmMiddlewares";

const schedulesRouter = Router();

schedulesRouter.post("", AuthMiddleware, createschedulesController);
schedulesRouter.get(
  "/properties/:id",
  AuthMiddleware,
  isAdmMiddleware,
  listchedulesController
);

export default schedulesRouter;
