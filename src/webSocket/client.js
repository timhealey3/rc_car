const WebSocket = require('ws');

// Connect to the WebSocket server
const socket = new WebSocket('ws://localhost:8080');

socket.on('open', () => {
    console.log('Connected to the server.');

    // Send a message to the server
    socket.send('Hello, Server!');
});

socket.on('message', (message) => {
    const data = JSON.parse(message);
    console.log(`Received from server: ${data.forward}`)
  //console.log(`Received from server: Name: ${data.forward}, ${data.left}, ${data.right}`);
});

socket.on('close', () => {
    console.log('Disconnected from the server.');
});

