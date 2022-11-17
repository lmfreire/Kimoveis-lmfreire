import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listchedulesService from "../../service/schedules/listchedulesService";

const listchedulesController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const schedules = await listchedulesService(id);
    return res.json(schedules);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default listchedulesController;
