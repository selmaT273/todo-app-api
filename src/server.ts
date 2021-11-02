import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import todoRoutes from './routes';

const app: Express = express();

const PORT: string | number = process.env.PORT || 3000;

app.use(cors());
// app.use(todoRoutes);

const uri: string = 'mongodb://localhost:27017/todo';
const ConnectOptions = { bufferCommands: false, autoCreate: true, autoIndex: false };

mongoose
  .connect(uri, ConnectOptions)
  .then(() => 
    app.listen(PORT, () =>
      console.log('server is running')
    )
  )
  .catch(err => {
    throw err;
  });