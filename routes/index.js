var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res, next) {
  res.redirect('/visitors');
});


 router.get('/auth/google', passport.authenticate(
   'google',
   { scope: ['profile', 'email'] }
 ));
 
 router.get('/oauth2callback', passport.authenticate(
   'google',
   {

     successRedirect : '/visitors',
     failureRedirect : '/visitors'
   }
 ));


 router.get('/logout', function(req, res){
   req.logout();
   res.redirect('/visitors');
 });


module.exports = router;
