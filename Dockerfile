FROM node:16-alpine3.16
RUN apk update && \
  apk upgrade && \
  apk add --no-cache vim bash git

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]