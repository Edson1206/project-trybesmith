import { Request, Response } from 'express';
import UserService from '../services/user.service';
import JwtToken from '../utils/jwt';

class UserController {
  private userService: UserService;

  private jwtToken: JwtToken;

  constructor() { 
    this.userService = new UserService();
    this.jwtToken = new JwtToken();
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const { id, username } = await this.userService.create(user);
    const token = this.jwtToken.encoder({ id, username });
    res.status(201).json({ token });
  };
}

export default UserController;