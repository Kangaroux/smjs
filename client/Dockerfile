FROM node:10

ARG WEBPACK_MODE

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN ./node_modules/.bin/webpack --output /build/app.js --mode=$WEBPACK_MODE