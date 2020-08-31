const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const db = {};
//connecting to the database
//passing a connection URI
const sequelize = new Sequelize("sound_vessel_traffic_db", "root", "passwordgoeshere", {
    host: "localhost",
    dialect: 'mysql',
} );
//Sequelize refers to the library itself while sequelize refers to an instance of 
//Sequelize, which represents a connection to one database
try {
    await sequelize.authenticate();
    console.log('Sequelize connection has been established successfully');
}   catch (error) {
    console.error('Unable to connect to the database:', error);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;