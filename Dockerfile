FROM node:18.12-alpine

ENV NODE_ENV=production

RUN apk update && apk upgrade

WORKDIR /book_and_droog/

COPY express/package.json express/package-lock.json /book_and_droog/

RUN npm install --omit=dev

COPY express/build /book_and_droog/

CMD node index.js