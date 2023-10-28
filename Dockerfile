# Use the official Node.js image as the base image
FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
