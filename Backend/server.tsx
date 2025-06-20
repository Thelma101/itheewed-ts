import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/subscribe',)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})