FROM node:8.3-alpine

ADD . /code
WORKDIR /code

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
