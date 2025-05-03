import { Server } from "http";
import config from "./app/config";
import app from "./app/app";

// handle unhandledRejection
process.on("unhandledRejection", () => {
  // close all connection
  server.closeAllConnections();

  // turn off the server
  server.close(() => {
    console.log("Unhandled rejection and turn off the server !");
    process.exit(1);
  });
});

// handle uncaughtException
process.on("uncaughtException", () => {
  console.log("Uncaught exception !");
  process.exit(1);
});

let server: Server;
const main = async () => {
  server = app.listen(config.port, () => {
    console.log(`server is running on port ${config.port}`);
  });
};

main()
  .then(() => console.log("successfully connected"))
  .catch((err) => console.log(err));