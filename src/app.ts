import express from 'express';
import { loginRouters, orderRouters, productRouters, userRouters } from './routes';

const app = express();

app.use(express.json());
app.use('/products', productRouters);
app.use('/users', userRouters);
app.use('/orders', orderRouters);
app.use('/login', loginRouters);

export default app;