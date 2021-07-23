FROM node:14.17.1 as build

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .

EXPOSE 3005

CMD ["npm", "start"]