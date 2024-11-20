const Websocket = require('ws');

const shadowfax = new Websocket.Server({port: 8080});

console.log('Shadowfax server protocol has been established');

shadowfax.on('connection', (socket) => {
  console.log('client connected');

  const data = {
    forward: false,
    left: false,
    right: false,
  }

  socket.send(JSON.stringify(data));

  // listen for messages from pi <not sure if I will allow this>
  socket.on('message', (message) => {
    console.log('Received from raspberry pi: '. message);
  });

  socket.on('close', () => {
    consolve.log('Client disconnected');
  });
});
