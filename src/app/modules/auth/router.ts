import { Router } from "express";
import { loginController, registerController } from "./controller";

const router = Router();

router.get("/", loginController);
router.post("/login", loginController);

router.post("/register", registerController);

export default router;
