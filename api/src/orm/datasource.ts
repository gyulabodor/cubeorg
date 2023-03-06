import { DataSource } from "typeorm";
import { DB, DB_HOST, DB_PORT, DB_PW, DB_USER } from "../config";
import { Attendance,Comment,Game,GameSession, SessionDate, User } from "../entities";

export const datasource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PW,
    database: DB,
    synchronize: true,
    logging: true,
    entities: [Attendance,Comment,Game,GameSession,SessionDate,User]
})