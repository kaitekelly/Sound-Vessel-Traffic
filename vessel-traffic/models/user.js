// models should look like below
module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING, 
            allowNull: false, 
            unique: true, 
        },

        subId: {
            type: DataTypes.STRING,
            allowNull: false
        },

        first_name: {
            type: DataTypes.STRING,
            allowNull: true
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    console.log(User === sequelize.models.User);
    return User;
}

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
//         }
//         console.log("created user: ", { id: res.insertId, ...newUser});
//         result(null, { id: res.insertId, ...newUser});
//     });
// };

// User.findById = (userId, result) => {
//     sql.query(`SELECT * FROM users WHERE id = ${userId}`, (err, res) => {
//         if(err) {
//             console.log("error: ", err)
//             result(err, null);
//             return;
//         }
//         if (res.length) {
//             console.log("found customer: ", res[0]);
//             result(null, res[0]);
//             return;
//         }

//         //not found
//     })
// }

// module.exports = User;
