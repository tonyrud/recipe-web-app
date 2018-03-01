FROM node:8.9-slim

ENV HOME=/app

# COPY package.json $HOME

COPY . $HOME
WORKDIR $HOME
RUN npm install

#EXPOSE 4200

CMD npm run dev