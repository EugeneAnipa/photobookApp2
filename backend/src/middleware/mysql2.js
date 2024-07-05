import mysql from "mysql2/promise";
import "dotenv/config";

const loginappdb = await mysql.createConnection({
  host: process.env.MYSQL2HOST,
  user: process.env.MYSQL2USER,
  database: process.env.MYSQL2DATABASE,
  password: process.env.MYSQL2PASSWORD,
});

export { loginappdb };
