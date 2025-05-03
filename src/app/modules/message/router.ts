import { Router } from "express";
import {
  createMessageController,
  getMessageByUserIdController,
} from "./controller";
import catchAsync from "../../middlewares/HOF/catchAsyncHandler";

const router = Router();

router.post("/", catchAsync(createMessageController));

router.post("/:userId", catchAsync(getMessageByUserIdController));

export default router;
