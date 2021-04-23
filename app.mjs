import express from 'express'
import bodyParser from "body-parser";
import cors from 'cors'
import con from "./helpers/con.mjs";

const port = 5000;

// Middlewares
import appendUserToRequest from './middlewares/append-user-to-request.mjs';

// Routes
import indexRouter from './routes/index.mjs';
import usersRouter from './routes/users.mjs';
import authRouter from './routes/auth.mjs';
import profileRouter from './routes/profile.mjs';

const app = express();

app.use(express.urlencoded({ extended: false }))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(cors())
  .use(appendUserToRequest)

  // Routing
  .use('/', indexRouter)
  .use('/users', usersRouter)
  .use('/auth', authRouter)
  .use('/profile', profileRouter)

con(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  })
})

