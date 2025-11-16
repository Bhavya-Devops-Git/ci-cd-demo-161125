# Use official Node image (alpine for small size)
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy app source
COPY . .

# Expose port used by app
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
