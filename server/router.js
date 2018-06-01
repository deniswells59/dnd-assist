const
  Authentication = require('./controllers/authentication'),
  passportService = require('./services/passport'),
  User = require('./models/user'),
  LocalStrategy = require('passport-local').Strategy,
  passport = require('passport');


passport.use(new LocalStrategy(
  function(name, password, done) {
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
  }
));

const
  requireAuth = passport.authenticate('jwt', { session: false }),
  requireSignIn = passport.authenticate('local', { session: false });

// Route Exports
module.exports = function(app) {
  // Protected route that requires you to pass through requireAuth
  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'Server authentication home route' })
  });

  app.post('/signin', requireSignIn, Authentication.signin);
  app.post('/signup', Authentication.signup);
}
