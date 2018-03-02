FROM node:8.9-alpine

ENV HOME=/app

WORKDIR $HOME

RUN npm install -g nodemon
COPY package.json $HOME
RUN npm install
COPY . $HOME

CMD npm run dev