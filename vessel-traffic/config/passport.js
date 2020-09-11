const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require("../models");

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// passport.use(new LocalStrategy(
//     // {
//     //     usernameField: "username",
//     // },
//     (username, password, done) => {
//         console.log("Passport page")
//         db.User.findOne({ username: username })
//             .then(dbUser => {
//                 if (dbUser) {
//                     return done(null, false, {
//                         message: "Account with that email already present. Please log in."
//                     })
//                 }
//                 if (!dbUser) {
//                     return done(null, false, {
//                         message: "Incorrect email address."
//                     });
//                 } else if (!dbUser.validPassword(password)) {
//                     return done(null, false, {
//                         message: "Incorrect email address."
//                     });
//                 }
//                 return done(null, dbUser);
//             });
//     }
// )
// );

passport.use(new LocalStrategy(
  function (username, password, done) {
    console.log("Passport page")
    db.User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
))





module.exports = passport;