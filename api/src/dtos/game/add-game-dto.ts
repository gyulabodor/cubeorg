import { IsDefined } from "class-validator";

export class AddGameDTO{
    @IsDefined()
    name?: string;

    @IsDefined()
    imageURL?: string;
}