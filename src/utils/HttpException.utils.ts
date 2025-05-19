import { StatusCode } from "../constant/statusCode.constant";

class HttpException extends Error {
  statuscode: number;
  isCustom: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statuscode = statusCode;
    this.isCustom = true;
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message: string): HttpException {
    return new HttpException(message, StatusCode.BAD_REQUEST);
  }

  static unauthorized(message: string): HttpException {
    return new HttpException(message, StatusCode.UNAUTHORIZED);
  }

  static notFound(message: string): HttpException {
    return new HttpException(message, StatusCode.NOT_FOUND);
  }

  static forbidden(message: string): HttpException {
    return new HttpException(message, StatusCode.FORBIDDEN);
  }

  static internalServerError(message: string): HttpException {
    return new HttpException(message, StatusCode.INTERNAL_SERVER_ERROR);
  }
}

export default HttpException;
