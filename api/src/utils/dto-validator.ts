import { validate } from "class-validator"
import { BadRequestError } from "../errors";
import { ConstraintsObject } from "../interfaces";

export const validateDTO = async (dto: Object): Promise<ConstraintsObject[] | boolean> => {
    const errors = await validate(dto,{whitelist: true});
    let constraints: ConstraintsObject[] = [];
    if (errors.length > 0) {
        errors.map(err => {
            if (err.constraints) {
                constraints.push(err.constraints); 
            }
        });
        return constraints;   
    }
    return true;
}
export const handleValidationResult = (constraints: ConstraintsObject[] | boolean) => {
    if (typeof constraints === "boolean") return true;

    throw new BadRequestError(constraints.join(";"));
}

export const isValid = async (dto: Object):Promise<ConstraintsObject[] | boolean> => {
    return handleValidationResult(await validateDTO(dto)); 
}