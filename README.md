This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# qasa-chat-app

## What is this?

This is a small experimental project using WebSockets in node.js, via the package [ws](https://github.com/websockets/ws), to start a server that a client can then connect to and send messages to the other connected parties.

Also included is a React frontend application to consume said WebSockets server.

### A word on data shape

The server is quite liberal in what it sends and receives. It simply receives data in string format and broadcasts it to the other listeners (not sending it back to the currently sending client). The only side effect of communicating with the server is that it possibly regularly broadcasts the number of connected clients under the `numberOfClients` key. This is also done every time data is received by the server. 

You will have to deal with this extra metadata as you see fit, the bundled front end application in this project is made to display that number in the UI.


## Available Scripts

### `npm run start-client`

Runs the client part of the app

### `npm run start-server`

Runs the WebSocket server

### `npm start`

Runs both the server and the client concurrently

## Roadmap (in order of perceived importance)

* Implement build scripts to make the server deployable separately
* Some handling of authentication and actual user names
* Some kind of persistence/database
* Write tests
* Make a UI theme
* Directed chats with a user of your choice instead of one huge chatroom?

