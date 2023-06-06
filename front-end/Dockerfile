# Use a base image with Node.js installed
FROM node:14.17.0-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application files
COPY . .

# Build the React application
RUN npm run build

# Serve the built application using a lightweight web server
FROM nginx:1.21.0-alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the container port
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]