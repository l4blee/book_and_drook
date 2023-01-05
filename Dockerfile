FROM node:18.12-alpine

ENV NODE_ENV=production

RUN apk update && apk upgrade

WORKDIR /book_and_droog/backend

COPY backend/package.json backend/package-lock.json /book_and_droog/backend/
RUN npm install --omit=dev

COPY backend/dist/ /book_and_droog/backend/
COPY frontend/dist/ /book_and_droog/frontend/dist/

CMD node index.js