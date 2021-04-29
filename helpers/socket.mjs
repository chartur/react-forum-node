import { createRequire } from "module";
const require = createRequire(import.meta.url);
import http from 'http';

const server = http.createServer();
const io = require('socket.io')(server);
server.listen(9000, () => {
  console.log('socket on 9000 port')
});
let socketIds = [];

io.on('connection', (socket) => {
  socketIds.push({id: socket.id, socket});

  socket.on('disconnect', () => {
    socketIds = socketIds.filter((s) => s.id !== socket.id);
  })
})

export {
  io,
  socketIds
};