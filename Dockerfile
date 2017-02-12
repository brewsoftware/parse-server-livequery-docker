FROM node:latest

RUN apt-get -y update && apt-get install -y vim
RUN mkdir /src
COPY ./packages.json /src
COPY ./index.js /src
WORKDIR /src
RUN npm install

CMD /src/npm run start
