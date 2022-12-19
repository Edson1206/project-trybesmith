import UserModel from '../models/user.model';
import { User } from '../interfaces/users';
import token from '../utils/jwt';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async create(user: User): Promise<string> {
    const result = await this.model.create(user);
    const tokenUser = token.generateToken(result);
    return tokenUser;
  }
}

export default UserService;