FROM node:18.12-alpine

ENV NODE_ENV=production

RUN apk update -y && apk upgrade -y

WORKDIR /book_and_droog/

COPY ./dist /book_and_droog/backend/dist
COPY ../frontend/dist /book_and_droog/frontend/dist

CMD node backend/dist/index.js