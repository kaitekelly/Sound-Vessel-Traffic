let db = require("../../models");
const router = require("express").Router();
//route to retrieve all ships
router.route("/").get(function(req, res) {
  console.log("is this a problem?")
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
router.route("/:id").get(function(req, res) {
  db.Ship.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Ship]
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
