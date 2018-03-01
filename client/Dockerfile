FROM node:8.9-slim

ENV HOME=/app

WORKDIR $HOME

COPY package.json $HOME
RUN npm install && mv node_modules /node_modules
COPY . $HOME

#ENV PORT 4200
# EXPOSE 3000

CMD npm run dev