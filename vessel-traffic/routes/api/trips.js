let db = require("../../models");
// const app = require("../../controllers/shipsController");

//route to get all trips

module.exports = function(app) {
app.get("/api/trips", function(req, res) {
    app.get("/api/trips", function(req, res) {
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
});

//route to get a single trip
app.get("/api/trips/:id", function(req, res) {
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
app.post("/api/trips", function(req, res) {
    db.Trip.create(req.body).then(function(dbTrip) {
        res.json(dbTrip);
    });
});

//DELETE route for deleting trips
app.delete("/api/trips/:id", function(req, res) {
    db.Trip.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbTrip) {
        res.json(dbTrip);
    });
});

//put route for updating posts
app.put("/api/trips", function(req, res) {
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
}