# Simple Hotel Backend
GraphQL API for a Room resource.
Uses NestJS, GraphQL and TypeORM over SQLite

## Deploy
Clone the project and navigate to the root folder. Then run using docker or npm.

    git clone https://github.com/JCiroR/Simple-Hotel-Backend.git
    cd simple-hotel-backend

### Using Docker
Build the docker image and run it:

    docker build --tag "nestjs-api" .
    docker run -p 3000:3000 nestjs-api

### Build directly
Using a node version manager get node v18.16.0 and npm 9.5.1. Install dependencies and start the server:

    npm install
    npm run start

## Usage
API is served on localhost:3000/graphql

### Create Room:

    mutation {
      createRoom(createRoomInput: { roomId: "100", guestName:"Tom", state: OCCUPIED }) {
        roomId,
        guestName,
        lastChanged,
        state	
      }
    }

### Query Room:

    {
      room(roomId: "100"){
        roomId,
        guestName,
        lastChanged,
        state
      }
    }

### Query all rooms:

    {
      rooms {
        roomId,
        guestName,
        lastChanged,
        state
      }
    }

### Update Room:

    mutation {
      updateRoom(updateRoomInput: {
        roomId: "100",
        guestName: null,
        state:FREE
      })
    }
    
### Delete Room:

    mutation {
      removeRoom(roomId:"100")
    }
