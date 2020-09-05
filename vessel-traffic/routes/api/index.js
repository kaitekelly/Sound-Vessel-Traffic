const router = require("express").Router();
const shipRoutes = require("./ships");
const tripRoutes = require("./trips");
const userRoutes = require("./users");

//Ship routes
router.use("/ships", shipRoutes);
router.use("/trips", tripRoutes);
router.use("/users", userRoutes);

module.exports = router;