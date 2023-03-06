import { UNPROCESSABLE_ENTITY_ERROR } from "../config/http-error-codes"

export class UnprocessableEntityError extends Error {
	public errorCode = UNPROCESSABLE_ENTITY_ERROR;

	constructor(message: string) {
		super(message);
	}
}