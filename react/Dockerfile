FROM node:9.8.0-alpine

WORKDIR /code
COPY package.json package-lock.json /code/

RUN npm install

COPY . /code

EXPOSE 8080
