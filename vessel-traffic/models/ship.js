// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");

let ship = {
  all: function(cb) {
    orm.all("ships", function(res) {
      cb(res);
    });
  },
  // The letiables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("ships", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("ships", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("ships", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = ship;
