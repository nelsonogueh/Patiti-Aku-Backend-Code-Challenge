const dotEnv = require("dotenv").config();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.MYSQL_DB_HOSTNAME,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_DB_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
});
try {
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("MySql Connected...");
  });
} catch (Excemption) {
  console.log(Excmption);
}
module.exports = db;
