"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const env_config_1 = require("./env.config");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: env_config_1.DotenvConfig.DB_HOST,
    port: Number(env_config_1.DotenvConfig.DB_PORT),
    username: env_config_1.DotenvConfig.DB_USER,
    password: env_config_1.DotenvConfig.DB_PASSWORD,
    database: env_config_1.DotenvConfig.DB_NAME,
    logging: false,
    dropSchema: false,
    synchronize: true,
    entities: ["src/entities/**/*{.ts,.js}"],
});
