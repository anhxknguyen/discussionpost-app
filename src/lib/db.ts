import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "bon",
  password: "superboy789",
  database: "discussionsdb",
});

export default db;
