const
  passport = require('passport'),
  User = require('../models/user'),
  JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt,
  LocalStrategy = require('passport-local');


// Local Strategy
const localLogin = new LocalStrategy(function(name, password, done) {
  User.findOne({ name: name }, function (err, user) {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Incorrect name.' });
    }
    user.comparePassword(password, (err, isMatch) => {
      if(err) return done(err);
      if(!isMatch) return done(null, false, { message: 'Incorrect password.' });
      if(isMatch) return done(null, user);
    })
  });
});

// Setup options for JWT strategy
const jwtOptions = {
  jwtFromRequest: req => req.query.auth,
  secretOrKey: process.env.JWT_SECRET
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in our database
  // If it does, call 'done' with that user
  // otherwise, call done without a user object
  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }

  });
});

// Tell passport to use these strategies
passport.use(jwtLogin);
passport.use(localLogin);
