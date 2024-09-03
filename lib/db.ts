import mysql, { RowDataPacket } from "mysql2/promise";

let pool: mysql.Pool;

export const createPool = () => {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "delta_mls",
      port: Number(process.env.DB_PORT) || 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return pool;
};

export const query = async (
  sql: string,
  values?: any
): Promise<RowDataPacket[]> => {
  const pool = createPool();
  const [results] = await pool.execute(sql, values);
  return results as RowDataPacket[];
};
