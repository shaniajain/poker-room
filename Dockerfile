FROM node:12.16.3
RUN mkdir -p /opt/poker/
WORKDIR /opt/poker
COPY package*.json ./
RUN apt-get update
COPY . .
EXPOSE 3000
RUN npm install
RUN npm audit fix
RUN npm run build
RUN npm start
