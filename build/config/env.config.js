"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotenvConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(process.cwd(), ".env") });
// it will configure env variables
// process.cwd() gets the current working direstpory
// path.resolve() creates absoulute path to .env file
class DotenvConfig {
    static DB_HOST = process.env.DB_HOST;
    static DB_PORT = process.env.DB_PORT;
    static DB_USER = process.env.DB_USER;
    static DB_PASSWORD = process.env.DB_PASSWORD;
    static DB_NAME = process.env.DB_NAME;
    static PORT = process.env.PORT;
}
exports.DotenvConfig = DotenvConfig;
