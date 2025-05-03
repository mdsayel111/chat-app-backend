import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import catchAsync from "./HOF/catchAsyncHandler";
import AppError from "../customClasses/customError";

const authMiddleware = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const token = req.cookies.token;
    if (!token) {
      throw new AppError(401, "Unauthorized");
    }
    jwt.verify(token, config.jwtSecret as string);
    // req.user = decoded;
    next();
  }
);
export default authMiddleware;
