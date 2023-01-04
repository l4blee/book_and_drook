FROM node:18.12-alpine

ENV NODE_ENV=production

RUN apk update && apk upgrade

WORKDIR /book_and_droog/


COPY ./dist /book_and_droog/backend/dist
COPY package*.json /book_and_droog/
# COPY ../frontend/dist /book_and_droog/frontend/dist

RUN npm install --omit=dev

CMD node backend/dist/index.js