import express from 'express';
import { orderRouters, productRouters, userRouters } from './routes';

const app = express();

app.use(express.json());
app.use('/products', productRouters);
app.use('/users', userRouters);
app.use('/orders', orderRouters);

export default app;