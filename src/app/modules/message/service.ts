import DB from "../../DB";
import { TMessage } from "./type";

export const createMessageService = async (data: TMessage) => {
  const dataFromDB = await DB.message.create({
    data,
  });
  if (dataFromDB) {
    return true;
  }
  return false;
};

export const getMessageByUserIdService = async (userId: number) => {
  const dataFromDB = await DB.message.findMany({
    where: {
      senderId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return dataFromDB;
};

// export const registerService = async (data: TUser) => {
//   // create user
//   const dataFromDB = await DB.user.create({ data });
//   if (dataFromDB) {
//     return true;
//   }
//   return false;
// };
