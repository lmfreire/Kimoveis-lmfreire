import { NextFunction, Request, Response } from "express";

const isAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { isAdm } = req.user;

    if (!isAdm) {
      return res.status(403).json({
        message: "User is not admin",
      });
    }

    next();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }
  }
};

export default isAdmMiddleware;
