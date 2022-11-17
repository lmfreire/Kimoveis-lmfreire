import { Router } from "express";
import createCategoryController from "../controlller/category/createCategoryController";
import listCategoryByIdController from "../controlller/category/listCategoryByIdController";
import listCategoryController from "../controlller/category/listCategoryController";
import AuthMiddleware from "../Middlewares/AuthMiddleware";
import isAdmMiddleware from "../Middlewares/isAdmMiddlewares";

const categoriesRouter = Router();

categoriesRouter.post(
  "",
  AuthMiddleware,
  isAdmMiddleware,
  createCategoryController
);
categoriesRouter.get("", listCategoryController);
categoriesRouter.get("/:id/properties", listCategoryByIdController);

export default categoriesRouter;
