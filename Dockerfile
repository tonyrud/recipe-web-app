FROM node:8.9-alpine

ENV HOME=/home/app

# RUN mkdir -p /app
WORKDIR $HOME/nuxt

COPY package.json $HOME/nuxt/
RUN npm install
COPY . $HOME/nuxt

EXPOSE 3000

CMD node server2.js