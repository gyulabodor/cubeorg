import { BAD_REQUEST_ERROR } from "../config/http-error-codes"

export class BadRequestError extends Error {
	public errorCode = BAD_REQUEST_ERROR;

	constructor(message: string) {
		super(message);
	}
}