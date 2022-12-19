import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import { User } from '../interfaces/users';
import jwt from '../utils/jwt';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const userData: User = req.body;
    const user = await this.loginService.login(userData);

    if (!user) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const { id, username } = user;
    
    const token = jwt.generateToken({ id, username });
    
    res.status(200).json({ token });
  };
}