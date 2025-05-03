import DB from "../../DB";
import { TUser } from "./type";

export const getUserByIdService = async (userId: number) => {
  // get user by id
  const dataFromDB = await DB.user.findUnique({
    where: { id: userId },
  });
  if (dataFromDB) {
    return dataFromDB;
  }
  return null;
};

// export const registerService = async (data: TUser) => {
//   // create user
//   const dataFromDB = await DB.user.create({ data });
//   if (dataFromDB) {
//     return true;
//   }
//   return false;
// };
