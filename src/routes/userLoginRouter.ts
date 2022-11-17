import { Router } from "express";
import userLoginController from "../controlller/user/userLoginController";

const loginRouter = Router();

loginRouter.post("", userLoginController);

export default loginRouter;
