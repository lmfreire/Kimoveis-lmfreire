import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { IUserRequest } from "../../interfaces/users";
import createUserService from "../../service/user/createUserService";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { email, isAdm, name, password }: IUserRequest = req.body;
    const user = await createUserService({ email, isAdm, name, password });

    return res.status(201).json(instanceToPlain(user));
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default createUserController;
