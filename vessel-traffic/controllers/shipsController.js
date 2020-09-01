// const db = require("../models");
let express = require("express");
let router = express.Router();
// Import the model (cat.js) to use its database functions.
let ship = require("../models/ship.js");
const trip = require("../models/trip.js");
router.get("/plannedtrips", function (req, res) {
res.send("Hello There")
    console.log("Haylo");
  }); 
router.post("/api/createtrips", function (req, res) {
    res.send("Create page")
  ship.create()
});
router.delete("/api/deletetrips/:id", function(req, res) {
    res.send("Delete page")
  ship.delete(condition, function(result) {
   
  });
});
router.put("/api/ships/:id", function(req, res) {
    res.send("Update page")
  ship.update({
   
  });
});

//trip planner code starts here
router.post('/api/plantrip', function(req, res) {
  res.send('Sailing trip created');
})


//trip planner code with start and end date
router.post("/api/plantrip", function(req, res) {
  trip.create([
    "start_sail_date", "end_sail_date"
  ], [
    req.body.start_sail_date, req.body.end_sail_date
  ], function(result) {
    res.
  })
})

router.post("/api/trips", function(req, res) {
  trip.create([
    "start_sail_date", "end_sail_date"
  ],[
    req.body.start_sail_date, req.body.end_sail_date
  ], function(result) {
    res.json({ id: result.insertId });
  });
});
module.exports = router;
//***********************************************/

// const { Op } = require("sequelize");
// const trip = require("../models/trip.js");

// // Find all users
// const users = User.findAll();
// console.log(users.every(user => user instanceof User)); // true
// console.log("All users:", JSON.stringify(users, null, 2));

// //delete user
// const deleteUser =  User.destroy({
//   where: {
//     user_id: '',
//   }
// });

// //Find all trips
// const trips =  Trip.findAll();
// console.log(trips.every(trip => trip instanceof Trip));
// console.log("All trips:", JSON.stringify(trips, null, 2));

// //Find all ships and boats
// const ships =  Ship.findAll();
// console.log(ships.every(ship => ship instanceof Ship));
// console.log("All ships and boats:", JSON.stringify(trips, null, 2))

// //Find all large type ships
// Ship.findAll({
//   where: {
//     [Op.and]: [
//       { ship_type_name: 'Bulk Carrier' },
//       { ship_type_name: 'Ro-Ro/Passenger Ship' },
//       { ship_type_name: 'Container Ship' },
//       { ship_type_name: 'Inland, Passenger Ship, Ferry, Cruise ship'},
//       {ship_type_name: 'Passenger'}
//     ]
//   }
// });

// //create trip
// const tripDate =  Trip.create({
//   sail_date_id: '',
//   start_destination: '',
//   end_destination: '',
//   start_sail_date: '',
//   end_sail_date: ''
// }, {fields: ['start_destination', 'end_destination', 'start_sail_date', 'end_sail_date']})

// //update trip
// // const updateTrip = 

// //delete trip
// const deleteTrip =  Post.destroy({
//   where: {
//     sail_date_id: '',
//   }
// });

// const user =  User.create({
//   username: 'alice123',
//   isAdmin: true
// }, { fields: ['username'] });
// // let's assume the default of isAdmin is false
// console.log(user.username); // 'alice123'
// console.log(user.isAdmin); // false


