'use strict';

export default function(socketio) {
  socketio.set('origins', '*:*');
  
  socketio.on('connection', socket => {
    console.log(`Is Socket Connected?: ${socket.connected}`);
    socket.emit('test', { data: 'test'});
  });
}
