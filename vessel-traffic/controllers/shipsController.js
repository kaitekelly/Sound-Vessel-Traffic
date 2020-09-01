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


