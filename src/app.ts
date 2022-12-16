import express from 'express';
import productRouters from './routes';

const app = express();

app.use(express.json());
app.use('/products', productRouters);

export default app;