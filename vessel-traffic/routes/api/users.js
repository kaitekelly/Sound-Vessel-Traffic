const db = require("../../models");
const router = require("express").Router();

router.route("/").post(function(req, res) {
    console.log("I want to create this user.")
    console.log(req.body.username)
    db.User.create({
        email: req.body.username,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }).then(function(dbUser) {
        console.log("Am I working?")
            res.json(dbUser);
        }).catch(err => {
            res.status(401).json(err);
        });
})

module.exports = router;