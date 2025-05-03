import { RequestHandler } from "express";
import { loginService, registerService } from "./service";
import { TUser } from "./type";

export const loginController: RequestHandler = async (req, res) => {
  const data = req.body;
  const result = await loginService(data);
  if (result) {
    res.send("login success");
  } else {
    res.send("login fail");
  }
};

export const registerController: RequestHandler = async (req, res) => {
  const data: TUser = req.body;
  const result = await registerService(data);
  if (result) {
    res.send("register success");
  } else {
    res.send("register fail");
  }
};
