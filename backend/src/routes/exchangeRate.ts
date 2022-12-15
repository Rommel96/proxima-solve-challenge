import { Request, Response } from "express";

import db from "../db";

// Helpers
import { validateRequest } from "../helpers/validateRequest";
import { buildFailedResponse } from "../helpers/failResponse";
import { buildSuccessResponse } from "../helpers/successResponse";

export default async (req: Request, res: Response) => {
  try {
    await validateRequest(req);
    const { startAt, endAt } = req.query;

    // Parse Date for query in DB
    const parseStartAt = new Date(String(startAt));
    const parseEndAt = new Date(String(endAt));

    const exchange = await db.exchange_rate_eur_usd.findMany({
      where:
        startAt && endAt
          ? {
              date: {
                gte: parseStartAt,
                lte: parseEndAt,
              },
            }
          : {},
    });

    if (exchange.length === 0)
      return res.send(
        buildSuccessResponse(
          `Currency exchange rate not found for range input Date ${startAt} to ${endAt}`,
          []
        )
      );

    return res.send(
      buildSuccessResponse("Currency converter success: ", exchange)
    );
  } catch (error: any) {
    if (error.errors)
      return res
        .status(422)
        .send(buildFailedResponse(error.message, error.errors));
    return res.send(
      buildFailedResponse(
        error.message ||
          "We are having trouble processing your request. Please try again later.",
        error
      )
    );
  }
};
