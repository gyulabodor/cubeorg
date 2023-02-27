import "reflect-metadata";
import express from "express";
import cors from "cors";
import { API_PORT, CLIENT_URL } from "./config";
import { baseRouter } from "./routers";


const server = express();
server.use(express.json());
server.use(cors({origin: CLIENT_URL, credentials: true}));
server.use(baseRouter);
server.listen(API_PORT, () => {
    console.log(`CubeOrg server started! PORT: ${API_PORT}`);
})