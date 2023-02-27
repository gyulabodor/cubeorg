import { Router } from "express";
import { eventRouter } from "./eventRouter";

export const baseRouter = Router();

baseRouter.use("/events",eventRouter);