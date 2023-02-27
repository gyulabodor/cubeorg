import "dotenv/config";
import { TypeChecker } from "../enums/type-checker-enum";

export const {
    CLIENT_URL,
    DB_USER,
    DB,
    DB_HOST,
} = process.env;

export const API_PORT = parseEnv(process.env.API_PORT || "", TypeChecker.Number)
export const DB_PORT = parseEnv(process.env.DB_PORT || "", TypeChecker.Number)
export const DB_PW = parseEnv(process.env.DB_PW || "", TypeChecker.String)



export function parseEnv(env: string, typeToParse: TypeChecker) :number | string | undefined {
    let temp;
    if (env) {
        switch (typeof typeToParse) {
            case "string":
                temp = env.toString();
                break;
            case "number":
                temp = parseInt(env);
                break;
        }
        return temp;
    }
    return temp;
}
