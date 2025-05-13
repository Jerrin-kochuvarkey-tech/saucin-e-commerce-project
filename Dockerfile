# Step 1: Build the React app with Vite
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app using Vite
RUN npm run build

# Step 2: Serve the React app using a web server
FROM nginx:alpine

# Copy the build artifacts from the build step to the Nginx web server's directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to be accessed from outside the container
EXPOSE 80

# Run Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
"Dockerfile" 31L, 669B       
