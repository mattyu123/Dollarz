# Base image
FROM debian:bookworm-slim

# Install Node.js and npm
RUN apt-get update -y && \
    apt-get install -y nodejs npm

# Set the working directory in the container
WORKDIR /frontend

# Copy the current directory contents into the container at /frontend
COPY . /frontend

# Install any required npm packages
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Command to start the app
CMD ["npm", "run", "dev"]
