# Simple Hotel Backend

## Deploy with docker

Navigate to the project file, build the docker image and run it:

    cd simple-hotel-backend
    docker build --tag "nestjs-api" .
    docker run -p 3000:3000 nestjs-api

Using a node version manager get node v18.16.0 and npm 9.5.1. Install dependencies and start the server:

    npm install
    npm run start

## Usage
Basic CRUD operations: