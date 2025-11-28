// Set up MySQL connection using mysql2
const mysql = require("mysql2");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burger_db"
  });
}

// Make connection
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;
