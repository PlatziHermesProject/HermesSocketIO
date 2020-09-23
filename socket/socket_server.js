const { io } = require('./../index');

io.on('connection', (client) => {

  client.emit('sendmessage', {
    message: 'Welcome to Hermes IO'
  });

  client.on('disconnect', () => {
    console.log('User disconnected');
  });

  client.on('sendmessage', (data, callback) => {
    client.broadcast.emit('sendmessage', data);
  });

});
