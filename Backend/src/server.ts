import express from 'express';
import mongoose from 'mongoose';
// import cors from 'cors';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import subscribeRoute from './route/subscribe.route';

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log('✅ Connected to MongoDB');

  })
  .catch((error) => {
    console.log('Mongo URI:', process.env.MONGODB_URI);
    console.error('❌ MongoDB connection error:', error);
  });



// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.use('/', subscribeRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});