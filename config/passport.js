var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Visitor = require('../models/visitor');

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "https://undocu-resources-drc.herokuapp.com/oauth2callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    Visitor.findOne({ 'googleId': profile.id }, function(err, visitor) {
      if (err) return cb(err);
      if (visitor) {
        if (!visitor.avatar) {
          visitor.avatar = profile.photos[0].value;
          visitor.save(function(err) {
            return cb(null, visitor);
          });
        } else {
          return cb(null, visitor);
        }
      } else {
        // we have a new visitor via OAuth!
        var newVisitor = new Visitor({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newVisitor.save(function(err) {
          if (err) return cb(err);
          return cb(null, newVisitor);
        });
      }
    });
  }
));

passport.serializeUser(function(visitor, done) {
  done(null, visitor.id);
});

passport.deserializeUser(function(id, done) {
  Visitor.findById(id, function(err, visitor) {
    done(err, visitor);
  });
});