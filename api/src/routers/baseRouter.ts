import { Router } from "express";
import { gameRouter } from "./game-router/game-router";
import { gameSessionRouter } from "./game-session-router";

export const baseRouter = Router();

baseRouter.use("/events",gameSessionRouter);
baseRouter.use("/games",gameRouter);