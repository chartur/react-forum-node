import {socketIds} from "../helpers/socket.mjs";

export default (req, res, next) => {
  const socketId = req.headers['x-socket-id'];
  if(socketId) {
    req.socketId = socketId
    req.socketObj = socketIds.find((s) => s.id === socketId)?.socket;
  }

  return next();
}