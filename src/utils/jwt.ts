import jwt from 'jsonwebtoken';
import { User } from '../interfaces/users';

const secret = 'batata';

const generateToken = (data: User) => {
  const token = jwt.sign(data, secret, { algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

export default {
  generateToken,
};