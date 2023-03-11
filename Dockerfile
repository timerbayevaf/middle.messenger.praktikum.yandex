FROM ubuntu:18.04
RUN apt update && apt install -y nodejs && apt install -y npm
WORKDIR /user/app
COPY ./ /user/app
EXPOSE 3000
RUN npm install
RUN npm run build
CMD node server.js