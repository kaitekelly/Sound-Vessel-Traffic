// const mysql = require("mysql");
// const dbConfig = require("../config/db.config");

// const connection = mysql.createConnection({
//     host: dbConfig.HOST,
//     user: dbConfig.USER, 
//     password: dbConfig.PASSWORD,
//     database: dbConfig.DB
// });

// connection.connect(error => {
//     if (error) throw error;
//     console.log("Successfully connected to the msql db from db.js file in models")
// })

// module.export = connection;

// const sql = require("../db/db.js");

// //constructor
// const User = function(user) {
//     this.email = user.email;
//     this.userId = user.userId;
// };

// User.create = (newUser, result) => {
//     sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;