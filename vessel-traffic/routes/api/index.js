const router = require("express").Router();
const shipRoutes = require("./ships");
const tripRoutes = require("./trips");
// const userRoutes = require("./user");

//Ship routes
router.use("/ships", shipRoutes);
router.use("/trips", tripRoutes);
// router.use("/user", userRoutes);

module.exports = router;