// var server = require('http').createServer();
// var io = require('socket.io')(server);

import http from 'http';
const server = http.createServer();

import socketio from 'socket.io';
const io = socketio(server);

io.on('connection', function(socket) {
  socket.on('event', function(data){});
  socket.on('disconnect', function(){});
});
server.listen(3000);
