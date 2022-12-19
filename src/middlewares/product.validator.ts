import { NextFunction, Response, Request } from 'express';
import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const productValidator = (req: Request, res: Response, next: NextFunction) => {
  const { error } = productSchema.validate(req.body);

  if (error) {
    const [message] = error.details.map((e) => e.message);
    return error.details[0].message.includes('required') ? res.status(400).json({ message })
      : res.status(422).json({ message });
  }
  return next();
};

export default productValidator;