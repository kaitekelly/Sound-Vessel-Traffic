// // Set up MySQL connection.
// let mysql = require("mysql");

// let connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Silvia13!",
//   database: "sound_vessel_traffic_db"
// });

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: "Silvia13!",
//     database: "sound_vessel_traffic_db"
//   });
// }

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection for our ORM to use.
// module.exports = connection;

// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("sound_vessel_traffic_db", "root", "Silvia13!", {
//   host: "127.0.0.1",
//   dialect: "mysql",
//   operatorsAliases: false
// });

// module.exports = sequelize;