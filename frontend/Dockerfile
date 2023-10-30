# Base image
FROM debian:bookworm-slim

# Install Node.js and npm
RUN apt-get update -y && \
    apt-get install -y nodejs npm

# Set the working directory in the container - this volume is mounted
WORKDIR /frontend

COPY package*.json /frontend/
RUN npm install

# Copy the current directory contents into the container at /frontend
COPY . /frontend

# Expose the port the app runs on
EXPOSE 3000

# Command to start the app
CMD ["npm", "run", "dev"]
