FROM node:9.6.1-alpine

WORKDIR /code
COPY package.json package-lock.json /code/

RUN npm install

COPY . /code

CMD [ "npm", "run", "truffle:migrate" ]
