# Choose the Node.js version
FROM node:20

# Update and install some dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    ca-certificates \
    apt-transport-https \
    gnupg2

# Install Vite globally
RUN npm install -g create-vite

# Set the working directory
WORKDIR /workspace

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app's source code
COPY . .
