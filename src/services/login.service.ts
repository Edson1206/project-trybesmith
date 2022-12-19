import { User } from '../interfaces/users';
import LoginModel from '../models/login.model';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel();
  }

  public async login(userData: User): Promise<User> {
    const [user] = await this.model.login(userData);    
    return user;
  }
}