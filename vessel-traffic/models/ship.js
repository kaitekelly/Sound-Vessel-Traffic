module.exports = function(sequelize, DataTypes) {
  const Ship = sequelize.define("Boat", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ship_id: {
      type: DataTypes.INTEGER
    },
    imo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mmsi: {
      type: DataTypes.INTEGER
    },
    ship_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    callsign: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ship_type_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING
    },
    eta: {
      type: DataTypes.DATE
    },
    ship_length: {
      type: DataTypes.INTEGER
    },
    ship_width: {
      type: DataTypes.INTEGER
    }

  })
  return Ship;
}



// CREATE TABLE traffic (
//   id int NOT NULL AUTO_INCREMENT,
//   shid_id INT,
//   imo INT,
//   mmsi INT,
//   ship_name varchar(255) NOT NULL,
//   callsign varchar(255) NOT NULL,
//   flag varchar(255) NOT NULL,
//   ship_type_name varchar(255) NOT NULL,
//   destination varchar(255) NOT NULL,
//   eta varchar(255) NOT NULL,
//   ship_length INT,
//   ship_width INT,
//   PRIMARY KEY (id)
// ); 

//***************************************************************************/
// // Import the ORM to create functions that will interact with the database.
// let orm = require("../config/orm.js");

// let traffic = {
//   all: function(cb) {
//     orm.all("traffic", function(res) {
//       cb(res);
//     });
//   },
//   // The letiables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("traffic", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("traffic", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     orm.delete("traffic", condition, function(res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (burgersController.js).
// module.exports = traffic;
