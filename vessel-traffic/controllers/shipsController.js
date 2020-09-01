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
