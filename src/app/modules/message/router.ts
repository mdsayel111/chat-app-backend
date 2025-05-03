import { Router } from "express";
import { createMessageController, getMessageByUserIdController } from "./controller";

const router = Router();

router.post("/", createMessageController);

router.post("/:userId", getMessageByUserIdController);

export default router;
