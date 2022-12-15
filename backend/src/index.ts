import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();

// Routes
import exchangeRate from "./routes/exchangeRate";

// Validators
import { GET_EXCHANGE_RATE } from "./validators";

const app: Express = express();
const port = process.env.PORT;

// Home Route
app.get("/", (req: Request, res: Response) => {
  return res.send("Proxima challenge Rest API");
});

// Exchange rate route
app.get("/exchange-rate", GET_EXCHANGE_RATE, exchangeRate);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
