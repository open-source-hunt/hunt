# Step 1: Build the frontend
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the frontend (e.g., using Vite or Webpack)
RUN npm run 

# Expose the default frontend port
EXPOSE 3000

# Start frontend
CMD ["npm", "run", "dev"]
