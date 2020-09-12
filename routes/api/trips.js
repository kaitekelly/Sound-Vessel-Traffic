let db = require("../../models");
const router = require("express").Router();
//route to get all trips
router.route("/").get(function(req, res) {
    let query = {};
    if (req.query.sail_date_id) {
        query.TripId = req.query.sail_date_id;
    }
    db.Trip.findAll({
        where: query,
        // includes: [{model: db.Trip, include: [{ model: db.Ship}]}]
        includes:  [db.Trip]
    }).then(function(dbTrip) {
        res.send(dbTrip);
    });
});

//route to get a single trip
router.route("/:id").get(function(req, res) {
    console.log("is this working")
    db.Trip.findOne({
        where: {
            sail_date_id: req.params.id
        },
        includes: [db.Trip]
        // include: 'leader'
    }).then(function(dbTrip) {
        console.log("find the problem")
        res.json(dbTrip);

    });
});
//Trip route for saving a new trip
router.route("/").post(function(req, res) {
    console.log(req.body)
    db.Trip.create({
        start_destination: req.body.start_destination,
        end_destination: req.body.end_destination,
        start_sail_date: req.body.start_sail_date,
        end_sail_date: req.body.end_sail_date
    }).then(function(dbTrip) {
        console.log("is this functioning properly?")
        res.json(dbTrip);
    }).catch(err => {
        res.status(401).json(err);
    });
});
//DELETE route for deleting trips
router.route("/:id").delete(function(req, res) {
    console.log("is this another problem")
    db.Trip.destroy({
        where: {
            sail_date_id: req.params.id
        }
    }).then(function(dbTrip) {
        res.json(dbTrip);
    });
});
//put route for updating posts
// router.route("/trips/:id").get(function(req, res) {
//     db.Trip.update(
//         req.body, 
//         {
//             where: {
//                 id: req.body.id
//             }
//         }).then(function(dbTrip) {
//             res.json(dbTrip);
//         });
// });
module.exports = router;