FROM node:8.3-alpine

WORKDIR /code
COPY package.json package-lock.json /code/

RUN npm install \
 && npm install --global vue-cli

COPY . /code
