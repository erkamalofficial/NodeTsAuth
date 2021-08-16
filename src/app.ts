//@ts-nocheck
import dotenv from 'dotenv';
dotenv.config();
import './db/Connection';
import express from 'express';
import cors from 'cors';

import authRoute from './routes/AuthRoute';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute)
app.get('/', (req, res)=> {
  res.send('Welcome To Node Server')
})

const listner = app.listen(process.env.PORT || 8000, () => {
    console.log(`Server Running on port ${listner.address().port}.`);
  });