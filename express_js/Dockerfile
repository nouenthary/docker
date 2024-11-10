FROM node:18-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["node","server.js"]

#   docker build -t node-application .
#   docker run -it -p 9000:3000 node-application

#   docker-compose up --build
#   docker run -d -p 9000:3000 node-application