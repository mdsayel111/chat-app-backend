import express from "express";
import authRouter from "./modules/auth/router";
import messageRouter from "./modules/message/router";
import DB from "./DB";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// config cors
app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);

// parse request body
app.use(express.json());
app.use(cookieParser());

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
