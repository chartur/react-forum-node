import { createRequire } from "module";
const require = createRequire(import.meta.url);

let io;
let socketIds = [];

const socketInit = (server) => {
  io = require('socket.io')(server);
  io.on('connection', (socket) => {
    socketIds.push({id: socket.id, socket});

    socket.on('disconnect', () => {
      socketIds = socketIds.filter((s) => s.id !== socket.id);
    })
  })
}


export {
  io,
  socketIds,
  socketInit
};