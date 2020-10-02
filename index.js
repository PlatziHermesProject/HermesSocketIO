const express = require('express');
const cors = require('cors');
const socketIO = require('socket.io');
const http = require('http');
const https = require('https');
const db =  require('./config/db-connection');
const { cfg } = require('./config/config');
const path = require('path');


const app = express();
app.use(cors());

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, './public');
const port = cfg.port;

app.use(express.static(publicPath));

db.connectDB();

module.exports.io = socketIO(server);
require('./socket/socket_server');

server.listen(port, async(err) => {
  if(err) throw new Error(err)

  console.log(`Server online on  http://localhost:${port}`);
});
