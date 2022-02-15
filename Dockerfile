FROM node:17.4.0-alpine3.14 as devlopment
ENV NODE_ENV devlopment
WORKDIR /app
COPY package.json .
COPY package-lock.json . 

RUN npm install
RUN npm install react-router-dom@5.2.0
COPY . .
EXPOSE 3000 



CMD ["npm", "start"]