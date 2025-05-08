import { createServer } from "http";
import app from "./config/app.config";
import { AppDataSource } from "./config/database.config";
import { DotenvConfig } from "./config/env.config";
import { error } from "console";

function listen() {
  const PORT = DotenvConfig.PORT;
  const httpServer = createServer(app);
  httpServer.listen(PORT);
  console.log(`Server is Listening to port: ${DotenvConfig.PORT}`);
}

AppDataSource.initialize()
  .then(async () => {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
    listen();
  })
  .catch((err) => {
    console.log(`DATABASE CONNECTION FAILED: ${err.message}`);
  });
