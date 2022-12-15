#!/bin/bash

yarn install;

echo "=== migration scripts ====";

# RUN SCRIPTS
# Only in dev: Reset your database and apply all migrations, all data will be lost
yarn prisma migrate reset;

yarn prisma migrate dev --name setup-dev;
yarn prisma generate;


# Build app

echo "=== building app ===="
yarn run build;

echo "=== insert mock data into DB ===="
node scripts/initial_data.js;

echo "=== startin server ===="
yarn start