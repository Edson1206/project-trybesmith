import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import loginValidator from '../middlewares/login.validator';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/', loginValidator, loginController.login);

export default loginRouter;