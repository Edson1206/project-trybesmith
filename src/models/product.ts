import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Product } from '../interfaces/products';

export default class ProductModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT into Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, ...product };
  }

  public async getAll(): Promise<Product[]> {
    const [rows] = await this.connection.execute<(Product & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.products');

    return rows;
  }
}