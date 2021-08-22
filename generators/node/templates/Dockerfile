FROM node:12.16.2-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g nodemon

EXPOSE 3000

CMD npm start
