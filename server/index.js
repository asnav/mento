/* eslint-disable no-console */
// const cores = require('cores');
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.js';
import appointmentRouter from './routes/appointment.js';

dotenv.config();
const app = express();
app.use(express.json());
const port = 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// eslint-disable-next-line prefer-destructuring
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use('/user', userRouter);
app.use('/appointment', appointmentRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
