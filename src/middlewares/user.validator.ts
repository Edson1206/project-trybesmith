import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const userValidator = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    const [message] = error.details.map((e) => e.message);

    return error.details[0].message.includes('required') ? res.status(400).json({ message })
      : res.status(422).json({ message });
  }
  return next();
};

export default userValidator;
