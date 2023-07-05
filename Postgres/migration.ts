import { dbPool } from './db';

const migrate = async () => {
  try {
    await dbPool.query(
      `CREATE TABLE logs (
            id SERIAL PRIMARY KEY,
            timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            message TEXT
            );`,
    );

    console.log('Migrated successfully');
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

migrate();
