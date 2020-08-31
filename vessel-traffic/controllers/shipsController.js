// const db = require("../models");

let express = require("express");

let router = express.Router();

// Import the model (cat.js) to use its database functions.
let ship = require("../models/ship.js");

router.get("/", function (req, res) {
  ship.all(function (data) {
    let hbsObject = {
      ships: data
    };
    console.log(hbsObject);
    console.log("Haylo");
    res.render("index", hbsObject);
  });
});

router.post("/api/ships", function (req, res) {
  ship.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.delete("/api/ships/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  ship.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.put("/api/ships/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  ship.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;


//***********************************************/
const { Op } = require("sequelize");
const trip = require("../models/trip.js");

// Find all users
const users = await User.findAll();
console.log(users.every(user => user instanceof User)); // true
console.log("All users:", JSON.stringify(users, null, 2));

//Find all trips
const trips = await Trip.findAll();
console.log(trips.every(trip => trip instanceof Trip));
console.log("All trips:", JSON.stringify(trips, null, 2));

//Find all ships and boats
const ships = await Ship.findAll();
console.log(ships.every(ship => ship instanceof Ship));
console.log("All ships and boats:", JSON.stringify(trips, null, 2))

//Find all large type ships
Ship.findAll({
  where: {
    [Op.and]: [
      { ship_type_name: 'Bulk Carrier' },
      { ship_type_name: 'Ro-Ro/Passenger Ship' },
      { ship_type_name: 'Container Ship' },
      { ship_type_name: 'Inland, Passenger Ship, Ferry, Cruise ship'},
      {ship_type_name: 'Passenger'}
    ]
  }
});

//create trip
const tripDate = await Trip.create({
  sail_date_id: '',
  start_destination: '',
  end_destination: '',
  start_sail_date: '',
  end_sail_date: ''
}, {fields: ['start_destination', 'end_destination', 'start_sail_date', 'end_sail_date']})

//update trip
const updateTrip = 

//delete trip
const deleteTrip = await Post.destroy({
  where: {
    sail_date_id: '',
  }
});

// const user = await User.create({
//   username: 'alice123',
//   isAdmin: true
// }, { fields: ['username'] });
// // let's assume the default of isAdmin is false
// console.log(user.username); // 'alice123'
// console.log(user.isAdmin); // false


