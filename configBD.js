const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost", // MYSQL HOST NAME
  user: "root", // MYSQL USERNAME
  password: "", // MYSQL PASSWORD
  database: "Formulario", // MYSQL DB NAME
  port: 3306,
});

connection.connect((err) => {
  if (!err) console.log("Database connected successfully");
  else
    console.log(
      "Database connection failed" + JSON.stringify(err, undefined, 2)
    );
});

module.exports = connection;

