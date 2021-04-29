import { createRequire } from "module";
const require = createRequire(import.meta.url);
import http from 'http';

const socketPort = +(process.env.PORT + 1) || 5001;
const server = http.createServer();
const io = require('socket.io')(server);
server.listen(socketPort, () => {
  console.log(`socket on ${socketPort} port`)
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