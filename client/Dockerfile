FROM node:8.9-alpine

ENV HOME=/app

# RUN mkdir -p /app
WORKDIR $HOME

COPY package.json $HOME
RUN npm install && mv node_modules /node_modules
COPY . $HOME

ENV PORT 3000
# EXPOSE 3000

CMD npm run dev