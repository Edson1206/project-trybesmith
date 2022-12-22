import { Secret, sign } from 'jsonwebtoken';

class JwtToken {
  private config: object;

  private secret: string;

  constructor() {
    this.config = { algorithm: 'HS256', expiresIn: '1d' };
    this.secret = 'batata';
  }

  public encoder = (payload = {}): Secret => sign({ data: payload }, this.secret, this.config);
}

export default JwtToken;