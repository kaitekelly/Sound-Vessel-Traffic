const router = require("express").Router();
const shipsController = require("../../controllers/shipsController");

router.route("/")
 .get(shipsController.findAll)
 //do we need this post route with our app?
 .post(shipsController.create);

 router
  .route("/:id")
  .get(shipsController.findById)
  // do we need put and delete for our app? I don't think this is a function we'll have
  .put(shipsController.update)
  .delete(shipsController.remove);

module.exports = router;

