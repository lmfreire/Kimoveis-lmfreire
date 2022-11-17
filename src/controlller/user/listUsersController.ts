import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userListService from "../../service/user/listUsersService";
const listUsersController = async (req: Request, res: Response) => {
  try {
    const users = await userListService();

    return res.send(instanceToPlain(users));
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default listUsersController;
