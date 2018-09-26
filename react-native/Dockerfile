FROM node:9.8.0-alpine

RUN apk add --no-cache bash
RUN npm install -g expo-cli

WORKDIR /code
COPY package.json package-lock.json /code/

RUN npm install

COPY . /code
