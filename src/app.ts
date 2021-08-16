import dotenv from 'dotenv';
dotenv.config();
import './db/Connection';
import express from 'express';
import cors from 'cors';

import authRoute from './Routes/AuthRoute'
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute)

const listner = app.listen(process.env.PORT, () => {
    //@ts-ignore
    console.log(`Server Running on port ${listner.address().port}.`);
  });