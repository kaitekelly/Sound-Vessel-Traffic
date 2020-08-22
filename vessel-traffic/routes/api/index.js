const router = require("express").Router();
const shipRoutes = require("./ships");

//Ship routes
router.use("/ships", shipRoutes);



module.exports = router;