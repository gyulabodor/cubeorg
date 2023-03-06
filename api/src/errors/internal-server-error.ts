import { UNPROCESSABLE_ENTITY_ERROR } from "../config/http-error-codes"

export class InternalServerError extends Error {
	public errorCode = UNPROCESSABLE_ENTITY_ERROR;

	constructor(message: string) {
		super(message);
	}
}