import { AddGameDTO } from "../../dtos/game";
import { Game } from "../../entities";
import { ErrorMessage } from "../../enums/error-message";
import { InternalServerError, UnprocessableEntityError } from "../../errors";
import { datasource } from "../../orm";

export const addGame = async (dto: AddGameDTO) :Promise<Game> => {

    const game = new Game();
    game.name = dto.name;
    game.imageURL = dto.imageURL;

    const check = await datasource.getRepository(Game).findOneBy({
        name: game.name
    });
    if (check) throw new UnprocessableEntityError(ErrorMessage.ALREADY_EXISTS);

    const result = await datasource.getRepository(Game).save(game);

    if(!result) throw new InternalServerError(ErrorMessage.DATABASE_ERROR);
    return result;
}

export const getGames = async () :Promise<Game[]> => {
    const games = await datasource.getRepository(Game).find();
    if (!games) throw new InternalServerError(ErrorMessage.NOT_FOUND);
    return games;
}