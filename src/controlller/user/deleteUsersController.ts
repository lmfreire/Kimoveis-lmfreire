import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import deleteUserServie from "../../service/user/deleteUsersService";
const deleteUsersController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteUserServie(id);

    return res.status(204).json();
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default deleteUsersController;
