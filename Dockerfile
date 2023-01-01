FROM node:latest
WORKDIR /app
COPY package.json /app
Run npm install
COPY . /app
CMD node app.js
EXPOSE 3000