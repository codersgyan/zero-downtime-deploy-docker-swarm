# Use Node.js LTS (Long Term Support) as base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Bundle app source
COPY . .

# Your app binds to port 3000 so you'll use the EXPOSE instruction
EXPOSE 3000

# Define environment variable
ENV NODE_ENV production

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Start the application
CMD [ "node", "app.js" ]