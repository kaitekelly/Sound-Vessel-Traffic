const router = require("express").Router();
const shipRoutes = require("./ships");
const tripRoutes = require("./trips");
const userRoutes = require("./users");
const userLoginRoutes = require("./userLogin");

//Ship routes
router.use("/ships", shipRoutes);
router.use("/trips", tripRoutes);
router.use("/users", userRoutes);
router.use("/userLogin", userLoginRoutes);

module.exports = router;