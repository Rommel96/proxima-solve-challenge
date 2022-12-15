import { Request } from "express";
import { validationResult } from "express-validator";

export const validateRequest = (req: Request) => {
  return new Promise((resolve, reject) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return reject({ errors: errors.array() });
    }
    return resolve({});
  });
};
