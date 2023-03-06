import { Router } from "express";
import { AddGameDTO } from "../../dtos/game";
import { addGame, getGames } from "../../services/game";
import { isValid, validateDTO } from "../../utils";

export const gameRouter = Router();


gameRouter.post("", async (req,res,next) => {
    try {
        let isValidated;
        const addGameDTO = new AddGameDTO();
        addGameDTO.name = req.body.name;
        addGameDTO.imageURL = req.body.imageURL;
        isValidated = await isValid(addGameDTO);

        if (isValidated) {
            const uploaded = await addGame(addGameDTO);
            res.status(201).json(uploaded)
        }
    } catch (error) {
        next(error)
    }
});

gameRouter.get("", async (req,res,next) => {
    try {
        const games = await getGames();
        res.json(games);
    } catch (error) {
        next(error);
    }
});
