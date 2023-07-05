import { Client, Pool } from 'pg';
import { config } from 'dotenv';

config();

const dbPool = new Client({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_USER_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
});

dbPool.connect();

export { dbPool };
