var socket = io();

socket.on('connect', () => {
  console.log('Connected to server')
});

socket.on('disconnect', () => {
  console.log('Disconnected fron server')
});

socket.on('sendmessage', (response) => {
  console.log('Get response', response)
});
