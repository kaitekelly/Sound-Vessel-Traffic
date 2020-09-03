let db = require("../../models");
const router = require("express").Router();
//route to get all trips
router.route("/trips").get(function(req, res) {
    let query = {};
    if (req.query.trip_id) {
        query.tripId = req.query.trip_id;
    }
    db.Trip.findAll({
        where: query, 
        include: [db.Trip]
    }).then(function(dbTrip) {
        res.json(dbTrip);
    });
});
//route to get a single trip
router.route("/trips").get(function(req, res) {
    db.Trip.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Trip]
    }).then(function(dbTrip) {
        res.json(dbTrip);
    });
});
//Post route for saving a new post
router.route("/trips").get(function(req, res) {
    db.Trip.create(req.body).then(function(dbTrip) {
        res.json(dbTrip);
    });
});
//DELETE route for deleting trips
router.route("/trips/:id").get(function(req, res) {
    db.Trip.destroy({
        where: {
            id: req.params.id
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