import { Router } from "express";
import catchAsync from "../../middlewares/HOF/catchAsyncHandler";
import { getUserByIdController } from "./controller";

const router = Router();

router.post("/:userId", catchAsync(getUserByIdController));

export default router;
