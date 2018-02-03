FROM node:8.9.1

WORKDIR /usr/src
ADD . /usr/src

RUN npm install -g mocha

RUN npm install

LABEL maintainer="rich.gwozdz@gmail.com"