import { RequestHandler } from "express";
import { getUserByIdService } from "./service";
import { TUser } from "./type";

export const getUserByIdController: RequestHandler = async (req, res) => {
  const userId = Number(req.params.userId);
  const result = await getUserByIdService(userId);
  if (result) {
    res.send(result);
  } else {
    res.send("user not found");
  }
};

// export const registerController: RequestHandler = async (req, res) => {
//   const data: TUser = req.body;
//   const result = await registerService(data);
//   if (result) {
//     res.send("register success");
//   } else {
//     res.send("register fail");
//   }
// };
