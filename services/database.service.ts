import { Injectable } from '@nestjs/common';
import { dbPool } from 'Postgres/db';
@Injectable()
export class DatabaseService {
  private readonly pool = dbPool;
  async rawQuery(q: string) {
    return this.pool.query(q);
  }

  async log(text: string) {
    try {
      const query = 'INSERT INTO logs (message) VALUES ($1) RETURNING *';
      const values = [text];

      const result = await this.pool.query(query, values);
      const insertedItem = result.rows[0];

      console.log('Log item added successfully:', insertedItem);
    } catch (error) {
      console.error('Error adding log item:', error);
    } finally {
    }
  }
}
