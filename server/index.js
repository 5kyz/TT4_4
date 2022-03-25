import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

import authRoutes from './routes/auth.js'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello to test API');
})

app.use('/user', authRoutes)

const CONNECTION_URL = process.env.ATLAS_URI;
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT} with mongoose connected`)))
    .catch((err) => console.log(err.message));
