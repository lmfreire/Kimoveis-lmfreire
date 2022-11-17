import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { IPropertyRequest } from "../../interfaces/properties";
import createPropertieService from "../../service/propertie/createPropertieService";

const createPropertieController = async (req: Request, res: Response) => {
  try {
    const { address, size, value, categoryId }: IPropertyRequest = req.body;

    const propertie = await createPropertieService({
      address,
      categoryId,
      size,
      value,
    });

    return res.status(201).json(propertie);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default createPropertieController;
