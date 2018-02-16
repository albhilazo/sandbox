FROM bigtruedata/scala:2.12.4-alpine

ARG sbt_version=1.1.0

RUN apk add --no-cache --update wget \
 && wget -O- "https://github.com/sbt/sbt/releases/download/v$sbt_version/sbt-$sbt_version.tgz" \
    | tar xzf - -C /usr/local --strip-components=1 \
 && sbt exit

WORKDIR /code
COPY . /code

RUN sbt compile

CMD ["sbt", "run"]
