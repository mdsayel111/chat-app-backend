import { Router } from "express";
import { loginController, registerController } from "./controller";
import catchAsync from "../../middlewares/HOF/catchAsyncHandler";

const router = Router();

router.get("/", catchAsync(loginController));
router.post("/login", catchAsync(loginController));

router.post("/register", catchAsync(registerController));

export default router;
