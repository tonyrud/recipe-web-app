FROM node:8.9-slim

ENV HOME=/app

WORKDIR $HOME

COPY package.json $HOME
RUN npm install && mv node_modules /node_modules
COPY . $HOME

CMD npm run dev