import "reflect-metadata";
import express from "express";
import cors from "cors";
import { API_PORT, CLIENT_URL } from "./config";
import { baseRouter } from "./routers";
import { dataSourceInit } from "./orm";
import { errorHandler } from "./middlewares/error-handler";


const server = express();
server.use(express.json());
server.use(cors({origin: CLIENT_URL, credentials: true}));
server.use(baseRouter);
server.use(errorHandler);
server.listen(API_PORT, () => {
    console.log(`CubeOrg server started! PORT: ${API_PORT}`);
});

dataSourceInit();