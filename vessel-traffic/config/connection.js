//DELETE THIS FILE BECAUSE CONNECTION IS IN CONFIG.JSON AND SERVER.JS

// Set up MySQL connection.
// let mysql = require("mysql");

// let connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "whitecat1",
//   database: "sound_vessel_traffic_db"
// });

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: "whitecat1",
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
