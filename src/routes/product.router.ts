import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import productValidator from '../middlewares/product.validator';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/', productValidator, productController.create);
productRouter.get('/', productController.getAll);

export default productRouter;