# Use the official Node.js 20.5.0 image as the base image
FROM node:20.5.0

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package*.json yarn.lock ./

# Install the dependencies using yarn
RUN yarn install

# Copy the rest of the project files to the working directory
COPY . .

# Expose the port on which the application will run
EXPOSE 5001

# Start the application using yarn
CMD ["yarn", "start"]