const express = require("express");
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

app.use(require('body-parser').urlencoded({ extended: false }));
// app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use(require("./routes"));


// app.listen(PORT, function() {
//     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
//   });
//*** When i uncomment this listener for sequelize it says port 3001 is already in use
  db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
  });

  // testing
  //more testing
  