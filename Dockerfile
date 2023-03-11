FROM ubuntu:18.04
FROM node:16.14.0
RUN apt update && apt install -y nodejs
EXPOSE 3000
RUN yarn install
CMD yarn build
CMD node server.js