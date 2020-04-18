import { ErrorBadReq } from "../error";
import { ObjectSchema, ValidationResult } from "@hapi/joi";
import { Request, Response, NextFunction } from "express";
import logger from "../logger";
import { Logger } from "winston";
export class BaseController {
  protected logger: Logger;
  constructor() {
    this.logger = logger;
  }
  validateReq = <T>(joiSchema: ObjectSchema, body: T): void => {
    const validationResult: ValidationResult = joiSchema.validate(body);
    if (validationResult.error) {
      throw new ErrorBadReq(validationResult.error.message);
    }
  };
  get(req: Request, resp: Response, next: NextFunction) {
    resp.status(200).send("Implementation pending");
  }
  post(req: Request, resp: Response, next: NextFunction) {
    resp.status(200).send("Implementation pending");
  }
  put(req: Request, resp: Response, next: NextFunction) {
    resp.status(200).send("Implementation pending");
  }
  delete(req: Request, resp: Response, next: NextFunction) {
    resp.status(200).send("Implementation pending");
  }
}
