import { RequestHandler } from "express";
import { createMessageService, getMessageByUserIdService } from "./service";
import { TMessage } from "./type";

export const createMessageController: RequestHandler = async (req, res) => {
  const data: TMessage = req.body;
  const result = await createMessageService(data);
  if (result) {
    res.send("Message send successfully");
  } else {
    res.send("Message not send");
  }
};

export const getMessageByUserIdController: RequestHandler = async (
  req,
  res
) => {
  const userId = parseInt(req.params.userId);
  const result = await getMessageByUserIdService(userId);
  if (result) {
    res.send(result);
  } else {
    res.send("Message not get");
  }
};
