FROM node:9.5.0-alpine

WORKDIR /code
COPY package.json package-lock.json /code/

RUN npm install

COPY . /code

EXPOSE 3000
CMD ["npm", "start"]
