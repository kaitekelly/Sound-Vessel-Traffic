// const app = require("express").app();
// const shipsController = require("../../controllers/shipsController");
// let connected = require("../../config/connection")
let db = require("../../models");

module.exports = function(app) { 
//route to retrieve all ships
app.get("/api/ships", function(req, res) {
  let query = {};
  if (req.query.ship_id) {
    query.ShipId = req.query.ship_id;
  }

  db.Ship.findAll({
    where: query,
    includes: [db.Ship]
  }).then(function(dbShip) {
    res.json(dbShip);
  });
});

// Get route for retrieving a single ship
app.get("/api/ships/:id", function(req, res) {
  db.Ship.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Ship]
  }).then(function(dbShip) {
    res.json(dbShip)
  });
});
//should this be render instead of res.json?
app.post("/api/ships", function(req, res) {
  db.Ship.create(req.body).then(function(req, res) {
    db.Ship.create(req.body).then(function(dbShip) {
      res.json(dbShip)
    })
  });
});
}

// app.route("/")
//  .get("/plannedtrip", function (req, res) {
//   console.log("Please send data for ship traffic");
//   connected.query("SELECT * FROM traffic", function (err, result, fields) {
//     console.log(result);
//     res.send(result)

//   });
// })
//  //do we need this post route with our app?
//  .post(shipsController.create);

//  app.route("/:id")
//   .get(shipsController.findById)
//   .put(shipsController.update)
//   .delete(shipsController.remove);

//   app.get("api/plannedtrip", function (req, res) {
//     console.log("Please send data for ship traffic");
//     connected.query("SELECT * FROM traffic", function (err, result, fields) {
//       console.log(result);
//       res.send(result)
  
//     });
//   })
  

// module.exports = app;

