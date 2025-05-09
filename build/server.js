"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const app_config_1 = __importDefault(require("./config/app.config"));
const database_config_1 = require("./config/database.config");
const env_config_1 = require("./config/env.config");
function listen() {
    const PORT = env_config_1.DotenvConfig.PORT;
    const httpServer = (0, http_1.createServer)(app_config_1.default);
    httpServer.listen(PORT);
    console.log(`Server is Listening to port: ${env_config_1.DotenvConfig.PORT}`);
}
database_config_1.AppDataSource.initialize()
    .then(async () => {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
    listen();
})
    .catch((err) => {
    console.log(`DATABASE CONNECTION FAILED: ${err.message}`);
});
