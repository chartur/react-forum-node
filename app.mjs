import express from 'express'
import bodyParser from "body-parser";
import cors from 'cors'
import con from "./helpers/con.mjs";
const port = 5000;

// Routes
import indexRouter from './routes/index.mjs';
import usersRouter from './routes/users.mjs';
import authRouter from './routes/auth.mjs';


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

con(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  })
})

