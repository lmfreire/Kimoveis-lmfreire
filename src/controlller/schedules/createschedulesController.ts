import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";
import createschedulesService from "../../service/schedules/createschedulesService";

const createschedulesController = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;
    const { date, hour, propertyId }: IScheduleRequest = req.body;
    const schedules = await createschedulesService(id, {
      date,
      hour,
      propertyId,
    });
    return res.status(201).json({ message: schedules });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default createschedulesController;
