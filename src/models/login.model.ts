import { Pool } from 'mysql2/promise';
import connection from './connection';
import { User } from '../interfaces/users';

export default class LoginModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }
  
  public async login(userData: User): Promise<User[]> {
    const { username, password } = userData;
    const [data] = await this.connection.execute(
      `SELECT * FROM Trybesmith.users
      WHERE users.username=?
      AND users.password=?`, 
      [username, password],
    );
    
    return data as User[];
  }
}