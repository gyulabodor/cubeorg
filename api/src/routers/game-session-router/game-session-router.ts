import { Router } from "express";

export const gameSessionRouter = Router();

gameSessionRouter.get("", (req,res) => {
    res.send("works");
})
gameSessionRouter.get(":id", (req,res) => {
    res.send("works");
})
gameSessionRouter.get("", (req,res) => {
    res.send("works");
})