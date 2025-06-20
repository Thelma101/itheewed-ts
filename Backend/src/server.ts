import express from 'express';
// import cors from 'cors';
import mongoose from 'mongoose';
import addSubscriber from './controller/subscribe'

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb:mongoURI').then(() => {
  console.log('Hurray! You are connected to MongoDB')
}).catch((error) => {
  console.log('Error connecting to MongoDB', error)
});

app.use(express.urlencoded({ extended: true }));


// app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/subscribe')

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});