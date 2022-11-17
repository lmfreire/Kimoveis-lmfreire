import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listPropertieService from "../../service/propertie/listPropertieService";

const listPropertieController = async (req: Request, res: Response) => {
  try {
    const properties = await listPropertieService();

    return res.json(properties);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default listPropertieController;
