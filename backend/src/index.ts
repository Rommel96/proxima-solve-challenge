import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

import { buildFailedResponse } from "./helpers/failResponse";
import { buildSuccessResponse } from "./helpers/successResponse";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  return res.send("Proxima challenge Rest API");
});

app.get("/currency-converter", (req: Request, res: Response) => {
  try {
    const { value } = req.query;
    if (!value) throw new Error("value query is required");

    // TODO: Query to DB

    return res.send(
      buildSuccessResponse("Currency converter success: ", {
        currency: "USD",
        value,
      })
    );
  } catch (error: any) {
    return res.send(
      buildFailedResponse(
        error.message ||
          "We are having trouble processing your request. Please try again later.",
        error
      )
    );
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
