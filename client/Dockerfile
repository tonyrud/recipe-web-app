FROM node:8.9-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/package.json
RUN npm install \
  && npm ls \
  && npm cache clean --force \
  && mv /app/node_modules /node_modules
COPY . /app

EXPOSE 3000

CMD ["node", "server.js"]