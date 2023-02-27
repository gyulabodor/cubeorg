import "dotenv/config";

export const {
    CLIENT_URL,
    DB_USER,
    DB,
    DB_HOST,
} = process.env;

export const API_PORT = parseInt(process.env.API_PORT || "");
export const DB_PORT = parseInt(process.env.DB_PORT || "")
export const DB_PW = process.env.DB_PW || "";



