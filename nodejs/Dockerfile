FROM ubuntu:16.04

RUN apt-get update \
 && apt-get install -y \
    build-essential \
    curl

ARG nodejs_major_version=8
RUN curl -sL https://deb.nodesource.com/setup_$nodejs_major_version.x | bash - \
 && apt-get install -y \
    nodejs

ADD . /code
WORKDIR /code

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
