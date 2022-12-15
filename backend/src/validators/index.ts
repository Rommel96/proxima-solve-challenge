import dayjs from "dayjs";
import { query } from "express-validator";

export const GET_EXCHANGE_RATE = [
  query("startAt")
    .optional()
    .custom((value) => {
      return dayjs(value).isValid();
    })
    .withMessage("The start date must be a valid date."),
  query("endAt")
    .optional()
    .custom((value) => {
      return dayjs(value).isValid();
    })
    .withMessage("The end date must be a valid date."),
];
