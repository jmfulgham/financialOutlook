import pkg from "pg";
import dotenv from "dotenv";
const { Client } = pkg;
dotenv.config();

export const postgresDb = new Client({
  user: process.env.POSTGRES_USER_ID,
  host: "localhost",
  database: process.env.POSTGRES_DB_NAME,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});
