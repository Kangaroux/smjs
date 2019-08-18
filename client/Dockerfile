FROM node:10

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN ./node_modules/.bin/webpack --output /build/app.js