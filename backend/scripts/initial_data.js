/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */
// @ts-check

const { PrismaClient } = require("@prisma/client");

const fn = async () => {
  const client = new PrismaClient();

  // Source data from: https://finance.yahoo.com/currency-converter
  const inserts = await client.exchange_rate_eur_usd.createMany({
    data: [
      {
        value: 1.0527,
        date: new Date("12/01/2022"),
      },
      {
        value: 1.0537,
        date: new Date("12/02/2022"),
      },
      {
        value: 1.0537,
        date: new Date("12/03/2022"),
      },
      {
        value: 1.0542,
        date: new Date("12/04/2022"),
      },
      {
        value: 1.0497,
        date: new Date("12/05/2022"),
      },
    ],
  });

  console.log("==== total mock items: ", inserts.count);

  process.exit();
};

fn();
