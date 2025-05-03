import express from "express";
import authRouter from "./modules/auth/router";
import messageRouter from "./modules/message/router";
import DB from "./DB";
const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

app.get("/api/users", async (req, res) => {
  const users = await DB.user.findMany();
  res.send(users);
});

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

export default app;
