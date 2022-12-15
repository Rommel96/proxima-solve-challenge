<h1 align='center'>Proxima Backend Exchange rate</h1>

# Requirements 💻

- Docker and docker compose
- Terminal
- Node version > 14


## **Using 📦**

1. Build container

```
docker compose up -d;
```

2. Enter to the container

```
docker exec -it proxima-server bash
```

3. Run migration
(Give execution permissions: ```chmod +x server.sh```)

`BEFORE: Make sure the database container is running`

```
yarn migration
```

4. Test endpoint, use a client http like Insomnia o Postman

```
curl --request GET \
  --url 'http://localhost:3005/exchange-rate?startAt=12%2F01%2F2021&endAt=12%2F01%2F2022&='
```

**Use withou docket**

Update the variable in the ```DATABASE_URL in .env``` file with your url connection to the DB.

Run comands migration prisma  inside ```server.sh``` file

## **Options ✍️**

1. Mode Dev

```
yarn dev
```

2. Build app

```
yarn build
```

3. Start server

```
yarn start
```

