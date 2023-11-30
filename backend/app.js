import express from 'express';
import cors from 'cors';
import './database.js';
import morgan from 'morgan';
import cardsRoutes from './routes/cardsRoutes.js';
import loginRoutes from './routes/loginRoutes.js';

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/cards', cardsRoutes);
app.use('/login', loginRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
