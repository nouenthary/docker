# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Copy .env file into the container
COPY .env .env

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]

# docker-compose up --build -d