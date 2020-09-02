const express = require("express");
const mysql = require("mysql");
const routes = require("./controllers/shipsController");
const app = express();
const PORT = process.env.PORT || 3001;
// const db = require("./models");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
// }

// Add routes, both API and view
app.use(routes);

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });

//   db.sequelize.sync().then(function() {
//     app.listen(PORT, function() {
//       console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
//     });
//   });
  