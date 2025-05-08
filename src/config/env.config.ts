import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });
// it will configure env variables
// process.cwd() gets the current working direstpory
// path.resolve() creates absoulute path to .env file

export class DotenvConfig {
  static DB_HOST = process.env.DB_HOST;
  static DB_PORT = process.env.DB_PORT;
  static DB_USER = process.env.DATABASE_USERNAME;
  static DB_PASSWORD = process.env.DATABASE_PASSWORD;
  static DB_NAME = process.env.DATABASE;
  static PORT = process.env.PORT;
}
