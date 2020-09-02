// const db = require("../models");

let express = require("express");

let router = express.Router();

let connected = require("../config/connection")
const db = require("../models/ship.js");

router.get("/plannedtrip", function (req, res) {
    console.log("Please send data for ship traffic");
    connected.query("SELECT * FROM traffic", function (err, result, fields) {
      console.log(result);
      res.json(result)

    });
  });

router.post("/api/trips", function (req, res) {
    res.send("Create page")
    console.log("Haylo2");

  trip.create()
});

router.delete("/api/deletetrips/:id", function(req, res) {
    res.send("Delete page")
    console.log("Haylo3");


  ship.delete(condition, function(result) {
   
  });
});

router.put("/api/ships/:id", function(req, res) {
    res.send("Update page")
    console.log("Haylo4");


  ship.update({
   
  });
});

module.exports = router;

