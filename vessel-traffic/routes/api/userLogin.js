// const db = require('../../models');
const router = require('express').Router();
const passport = require('../../config/passport');

// router.route("/").post(
//     function(req, res, next) {
//         console.log("UserLoginPage")
//         passport.authenticate('local', function(err, user, info) {
//           if (err) { return next(err) }
//           if (!user) {
//             req.session.messages =  [info.message];
//             return res.redirect('/login')
//           }
//           req.logIn(user, function(err) {
//             if (err) { return next(err); }
//             return res.redirect('/');
//           });
//         })(req, res, next);
//       }
// )

router.route("/").post(
    passport.authenticate('local', function(req, res) {
        console.log("UserLogin page");
    })
)

// router.route("/").post((req, res) => passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', })(req, res));


module.exports = router;