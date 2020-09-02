const router = require("express").Router();
const shipsController = require("../../controllers/shipsController");
let connected = require("../config/connection")


// router.route("/")
//  .get("/plannedtrip", function (req, res) {
//   console.log("Please send data for ship traffic");
//   connected.query("SELECT * FROM traffic", function (err, result, fields) {
//     console.log(result);
//     res.send(result)

//   });
// })
//  //do we need this post route with our app?
//  .post(shipsController.create);

 router.route("/:id")
  .get(shipsController.findById)
  // do we need put and delete for our app? I don't think this is a function we'll have
  .put(shipsController.update)
  .delete(shipsController.remove);

  router.get("api/plannedtrip", function (req, res) {
    console.log("Please send data for ship traffic");
    connected.query("SELECT * FROM traffic", function (err, result, fields) {
      console.log(result);
      res.send(result)
  
    });
  })
  

module.exports = router;

