import { Router } from "express";
import createPropertieController from "../controlller/propertie/createPropertieController";
import listPropertieController from "../controlller/propertie/listPropertieController";
import AuthMiddleware from "../Middlewares/AuthMiddleware";
import isAdmMiddleware from "../Middlewares/isAdmMiddlewares";

const propertiesRouter = Router();

propertiesRouter.post(
  "",
  AuthMiddleware,
  isAdmMiddleware,
  createPropertieController
);
propertiesRouter.get("", listPropertieController);

export default propertiesRouter;
