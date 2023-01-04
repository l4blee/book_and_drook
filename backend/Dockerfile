FROM node:18.12-alpine

ENV NODE_ENV=production

RUN apk update && apk upgrade

WORKDIR /book_and_droog/backend

COPY package.json package-lock.json /book_and_droog/backend/
COPY dist/ /book_and_droog/backend/dist

RUN npm install --omit=dev

# COPY ../frontend/dist /book_and_droog/frontend/dist
WORKDIR /book_and_droog/backend/dist

CMD node index.js