# Create the image based on the official Node 6 image from dockerhub
FROM node:6

# Create a directory where the app will be placed
RUN mkdir -p /usr/src/app

# Define working directory, so that commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependencies
RUN npm install

# Install nodemon for development
RUN npm install --global nodemon

# Get all code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 3000

# Environment Variable for MongoDB URI from dockerhub
ENV MONGODB_URI_DEV='mongodb://database/mean-docker'

# Serve the app
# CMD ["npm", "start"]
