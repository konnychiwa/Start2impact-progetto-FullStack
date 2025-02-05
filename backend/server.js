import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config';

// app config
const app = express();
const PORT = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoint
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('la API funziona! Alla Frankenstein');
});

app.listen(PORT, () => {
  console.log(`The server is on http://localhost:${PORT}`);
});

// mongodb+srv://konny:NJcACAysZni2owOC@cluster0.q5lb4.mongodb.net/?
