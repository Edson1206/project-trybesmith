import { NextFunction, Response, Request } from 'express';
import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).required();

const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }
  return next();
};

export default loginValidator;