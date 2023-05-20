import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: string) {
    super("Invalid request parameters");
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return [{ message: this.errors }];
  }
}
