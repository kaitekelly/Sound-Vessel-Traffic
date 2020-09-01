// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize("sound_vessel_traffic_db", "root", "whitecat1", {
//     host: "localhost",
//     port: 3306,
// } );

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING, 
            allowNull: false, 
            unique: true, 
            // validate: {
            //     isEmail: true
            // }
        },

        password: {
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
    // we'll need to add first name and last name to login page
    //we could add password hashing here based on Oath2
    console.log(User === sequelize.models.User);
    return User;
}