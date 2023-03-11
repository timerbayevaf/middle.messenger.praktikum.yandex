FROM ubuntu:18.04
RUN apt update && apt install -y nodejs && apt install -y npm
WORKDIR /var/www
COPY ./server.js server.js
CMD echo $PWD && ls -la && cat server.js 