// //check to see if we need this page?

// let express = require("express");
// let router = express.Router();

// let connected = require("../config/connection")
// const db = require("../models/ship.js");

// router.get("/plannedtrip", function (req, res) {
//     console.log("Please send data for ship traffic");
//     connected.query("SELECT * FROM traffic", function (err, result, fields) {
//       console.log(result);
//       res.json(result)

//     });
//   });

// router.post("/api/trips", function (req, res) {
//     res.send("Create page")
//     console.log("Haylo2");

//   trip.create()
// });

// router.delete("/api/deletetrips/:id", function(req, res) {
//     res.send("Delete page")
//     console.log("Haylo3");


//   ship.delete(condition, function(result) {

   
//   });
// });

// router.put("/api/ships/:id", function(req, res) {
//     res.send("Update page")
//     console.log("Haylo4");


//   ship.update({
   
//   });
// });
// module.exports = router;

// // ***********************************************/
// // Sequelize mysql querries start below

// const { Op } = require("sequelize");
// const trip = require("../models/trip.js");
// const User = require("../models/user");

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

// //Find all trips
// const trips =  Trip.findAll();
// console.log(trips.every(trip => trip instanceof Trip));
// console.log("All trips:", JSON.stringify(trips, null, 2));

// //update trip
// // const updateTrip = 
// await User.update({ })

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
