FROM node:14-alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app


# Bundle app source
COPY . /app
RUN yarn install

# Suppose DB is running in a independent cluster
RUN npx prisma generate 

RUN yarn run build

EXPOSE 3005

# Run Server
CMD node dist/index.js