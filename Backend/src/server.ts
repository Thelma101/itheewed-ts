import express from 'express';
import mongoose from 'mongoose';
// import cors from '@types/cors';
import dotenv from 'dotenv';
dotenv.config();

import subscribeRoute from './route/subscribe.route';

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.mongoURI || '')
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
  });

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());


app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.use('/', subscribeRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});