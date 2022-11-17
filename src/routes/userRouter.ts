import { Router } from "express";
import createUserController from "../controlller/user/createUserController";
import deleteUsersController from "../controlller/user/deleteUsersController";
import listUsersController from "../controlller/user/listUsersController";
import AuthMiddleware from "../Middlewares/AuthMiddleware";
import isAdmMiddleware from "../Middlewares/isAdmMiddlewares";

const userRouter = Router();

userRouter.post("", createUserController);
userRouter.post("", createUserController);
userRouter.get("", AuthMiddleware, isAdmMiddleware, listUsersController);
userRouter.delete(
  "/:id",
  AuthMiddleware,
  isAdmMiddleware,
  deleteUsersController
);

export default userRouter;
