FROM node:8.9-alpine

RUN mkdir -p /app
WORKDIR /app

RUN npm install -g nodemon
COPY package.json /app/package.json
RUN npm install && mv node_modules /node_modules
COPY . /app

ENV PORT 80
EXPOSE 80

CMD ["node", "server.js"]