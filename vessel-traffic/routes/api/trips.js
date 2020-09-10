let db = require("../../models");
const router = require("express").Router();
//route to get all trips
router.route("/").get(function(req, res) {
    let query = {};
    if (req.query.trip_id) {
        query.TripId = req.query.trip_id;
    }
    db.Trip.findAll({
        where: query,
        // includes: [{model: db.Trip, include: [{ model: db.Ship}]}]
        include:  [db.Ship]
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
        // includes: [{model: db.Trip, include: [{ model: db.Ship}]}]
        include: [db.Ship]
    }).then(function(dbTrip) {
        console.log("find the problem")
        res.json(dbTrip);
        // let [trips] = [{dbTrip}]
        // const resObj = trips.map(trip => {
        //     return Object.assign(
        //         {}, {
        //            sail_date_id: trip.sail_date_id,
        //            start_destination: trip.start_destination,
        //            end_destination: trip.end_destination,
        //            start_sail_date: trip.start_sail_date,
        //            end_sail_date: trip.end_sail_date,
        //            main_id: trip.main_id.map(ship => {
        //                return Object.assign(
        //                    {},
        //                    {
        //                     main_id: ship.main_id,
        //                     ship_id: ship.ship_id,
        //                     imo: ship.imo,
        //                     mmsi: ship.mmsi,
        //                     ship_name: ship.ship_name,
        //                     callsign: ship.callsign,
        //                     flag: ship.flag,
        //                     ship_type_name: ship.ship_type_name,
        //                     destination: ship.destination,
        //                     ship_length: ship.ship_length,
        //                     ship_width: ship.ship_width,
        //                     eta: ship.eta
        //                    }
        //                )
        //            })
        //         }
        //     )
        // })
        // res.json(resObj)
    });
});
//Trip route for saving a new trip
router.route("/").post(function(req, res) {
    db.Trip.create(req.body).then(function(dbTrip) {
        res.json(dbTrip);
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
router.route("/trips/:id").get(function(req, res) {
    db.Trip.update(
        req.body, 
        {
            where: {
                id: req.body.id
            }
        }).then(function(dbTrip) {
            res.json(dbTrip);
        });
});
module.exports = router;