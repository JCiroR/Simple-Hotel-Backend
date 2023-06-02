# Base image
FROM node:18

# Listen on port 3000
EXPOSE 3000

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the build
RUN npm run build

# Start the server using dev build
CMD [ "npm", "run", "start:dev"]

