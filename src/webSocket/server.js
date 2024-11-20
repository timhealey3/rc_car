const Websocket = require('ws');
const readline = require('readline');
const shadowfax = new Websocket.Server({port: 8080});

console.log('Shadowfax server protocol has been established');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter command > '
});
 
shadowfax.on('connection', (socket) => {
  console.log('client connected');

  rl.prompt();
  rl.on('line', (line) => {
    const message = line.trim();
    const data = {
      forward: message,
    }
    socket.send(JSON.stringify(data));
    console.log("Data sent")
    rl.prompt();
  });

  //socket.send(JSON.stringify(data));
  // listen for messages from pi <not sure if I will allow this>
  socket.on('message', (message) => {
    console.log('Received from raspberry pi: '. message);
  });

  socket.on('close', () => {
    consolve.log('Client disconnected');
  });
});
