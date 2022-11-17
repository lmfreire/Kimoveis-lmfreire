import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listCategoryService from "../../service/category/listCategoryService";

const listCategoryController = async (req: Request, res: Response) => {
  try {
    const categories = await listCategoryService();

    return res.status(200).json(categories);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default listCategoryController;
