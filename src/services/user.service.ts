import UserModel from '../models/user.model';
import { User } from '../interfaces/users';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async create(user: User): Promise<User> {
    const result = await this.model.create(user);
    return result;
  }
}

export default UserService;