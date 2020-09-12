let db = require("../../models");
const router = require("express").Router();
//route to retrieve all ships
router.route("/").get(function(req, res) {
  console.log("is this a problem?")
  let query = {};
  if (req.query.main_id) {
    query.ShipId = req.query.main_id;
  }
  db.Ship.findAll({
    where: query,
    includes: [db.Ship]
  }).then(function(dbShip) {
    res.send(dbShip);
  });
});
// Get route for retrieving a single ship
router.route("/:id").get(function(req, res) {
  db.Ship.findOne({
    where: {
      main_id: req.params.id
    },
    includes: [{model: db.Trip, include: [{ model: db.Ship}]}]
  }).then(function(dbShip) {
    res.json(dbShip)
  });
})
router.route("/").get(function(req, res) {
  db.Ship.create(req.body).then(function(req, res) {
    db.Ship.create(req.body).then(function(dbShip) {
      res.json(dbShip)
    })
  });
})
module.exports = router;
