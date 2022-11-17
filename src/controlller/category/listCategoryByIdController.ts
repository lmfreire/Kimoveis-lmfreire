import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listCategoryByIdService from "../../service/category/listCategoryByIdService";

const listCategoryByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const categories = await listCategoryByIdService(id);

    return res.status(200).json(categories);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default listCategoryByIdController;
