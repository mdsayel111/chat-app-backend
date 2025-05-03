import DB from "../../DB";
import { TUser } from "./type";

export const loginService = async (data: Pick<TUser, "email" | "password">) => {
  const { email, password } = data;
  const dataFromDB = await DB.user.findFirst({
    where: {
      email,
    },
  });

  if (email == dataFromDB?.email && password == dataFromDB?.password) {
    return true;
  }
  return false;
};

export const registerService = async (data: TUser) => {
  // create user
  const dataFromDB = await DB.user.create({ data });
  if (dataFromDB) {
    return true;
  }
  return false;
};
