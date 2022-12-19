import { Router } from 'express';
import UserController from '../controllers/user.controller';
import userValidator from '../middlewares/user.validator';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', userValidator, userController.create);

export default userRouter;