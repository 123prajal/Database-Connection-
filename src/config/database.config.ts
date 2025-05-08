import {DataSource} from "typeorm";
import "reflect-metadata";
import { DotenvConfig } from "./env.config";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DotenvConfig.DB_HOST,
    port: Number(DotenvConfig.DB_PORT),
    username: DotenvConfig.DB_USER,
    password: DotenvConfig.DB_PASSWORD,
    database: DotenvConfig.DB_NAME,
    logging: false,
    dropSchema: false,
    synchronize: true,
    entities: ["src/entities/**/*{.ts,.js}"],
});