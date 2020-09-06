const express = require("express");
const mysql = require("mysql");
// const routes = require("./controllers/shipsController");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");
const passport = require('passport');

// Define middleware here

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
// }

app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use(require("./routes"));

//Connect to the MySQL DB
// const connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "whitecat1",
//     database: "sound_vessel_traffic_db"
// });

// connection.connect(function(err) {
//     console.log("connected!!!!!")
//     if (err)  throw err;
//     console.log('connected as id ' + connection.threadId);
// });

// app.listen(PORT, function() {
//     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
//   });
//*** When i uncomment this listener for sequelize it says port 3001 is already in use
  db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
  });
  