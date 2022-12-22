import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import { User } from '../interfaces/users';
import JwtToken from '../utils/jwt';

class LoginController {
  private loginService: LoginService;

  private jwtToken: JwtToken;

  constructor() {
    this.loginService = new LoginService();
    this.jwtToken = new JwtToken();
  }

  public login = async (req: Request, res: Response) => {
    const userData: User = req.body;
    const user = await this.loginService.login(userData);

    if (!user) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const { id, username } = user;
    
    const token = this.jwtToken.encoder({ id, username });
    
    res.status(200).json({ token });
  };
}

export default LoginController;