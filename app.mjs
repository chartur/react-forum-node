import express from 'express'
import bodyParser from "body-parser";
import http from 'http';
import cors from 'cors'
import con from "./helpers/con.mjs";
import { socketInit } from './helpers/socket.mjs';

const port = +process.env.PORT || 5000;

// Middlewares
import appendUserToRequest from './middlewares/append-user-to-request.mjs';
import appendSocketIdToRequest from './middlewares/append-socket-id-to-request.mjs';

// Routes
import indexRouter from './routes/index.mjs';
import usersRouter from './routes/users.mjs';
import authRouter from './routes/auth.mjs';
import profileRouter from './routes/profile.mjs';
import posts from './routes/posts.mjs';

const app = express();
const server = http.createServer(app);
socketInit(server);

app.use(express.urlencoded({ extended: false }))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(cors())
  .use(appendUserToRequest)
  .use(appendSocketIdToRequest)

  // Routing
  .use('/', indexRouter)
  .use('/users', usersRouter)
  .use('/auth', authRouter)
  .use('/profile', profileRouter)
  .use('/posts', posts)



con(() => {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  })
})

