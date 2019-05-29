var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/visitors');
});

 // Google OAuth login route
 router.get('/auth/google', passport.authenticate(
   'google',
   { scope: ['profile', 'email'] }
 ));
 
//Google OAuth login route // Google OAuth callback route
 router.get('/oauth2callback', passport.authenticate(
   'google',
   {
     //successRedirect: '/visitors/index',
     successRedirect : '/visitors',
     failureRedirect : '/visitors'
   }
 ));

// OAuth logout route
 router.get('/logout', function(req, res){
   req.logout();
   res.redirect('/visitors');
 });


module.exports = router;
