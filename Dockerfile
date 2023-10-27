# Use the official Node.js image as the base image
FROM node:18

WORKDIR /app

RUN npm update
RUN npm install -g @angular/cli
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
