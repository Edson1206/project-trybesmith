import express from 'express';
import { productRouters, userRouters } from './routes';

const app = express();

app.use(express.json());
app.use('/products', productRouters);
app.use('/users', userRouters);

export default app;