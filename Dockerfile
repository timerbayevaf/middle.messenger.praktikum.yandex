FROM ubuntu:18.04
FROM node:16.14.0
RUN apt update && apt install -y nodejs
WORKDIR /var/www
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 3000
CMD node server.js