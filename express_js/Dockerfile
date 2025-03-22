FROM node:18-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["node","server.js"]

#   docker build -t express_js .
#   docker run -it -p 9000:3000 node-application

#   docker-compose up --build
#   docker run -d -p 9000:3000 node-application


#   docker tag express_js:latest tharynouen/express_js:latest

#   docker push tharynouen/express_js:latest

#   docker.io/tharynouen/express_js:latest

#   registry.hub.docker.com/v1/repositories/busybox/tags

#	docker tag nest_js:latest tharynouen/nest_js:latest     docker push tharynouen/nest_js:latest

# 	docker.io/tharynouen/nest_js:latest
