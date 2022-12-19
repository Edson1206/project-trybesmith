import { Pool, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Order } from '../interfaces/orders';

export default class OrderModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [rows] = await this.connection.execute<(Order & RowDataPacket)[]>(
      `SELECT S.id, 
    S.user_id userId, 
    JSON_ARRAYAGG(P.id) productsIds
    FROM Trybesmith.orders S
    INNER JOIN Trybesmith.products P
    WHERE S.id = P.order_id
    GROUP BY S.id;`);

    return rows;
  }
}