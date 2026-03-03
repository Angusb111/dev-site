# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app
COPY . .

# Build Next.js app
RUN npm run build

# Expose port your app runs on
EXPOSE 3001

# Start app
CMD ["npm", "start"]