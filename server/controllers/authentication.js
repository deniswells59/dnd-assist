const
  jwt = require('jwt-simple'),
  User = require('../models/user');

// Generates a JWT token.
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.JWT_SECRET);
}

exports.signin = function(req, res, next) {
  // User has already had their name and password authenticated
  // so they just need to be given a token.
  res.send({
    ...req.user.toObject(),
    jwt: tokenForUser(req.user),
  });
}

// Signs the user up for the service
exports.signup = function(req, res, next) {
  const
    name = req.body.name,
    password = req.body.password;

  // Handle the case of someone only providing an name, or password, not both.
  if (!name || !password) {
    return res.status(422).send({
      error: 'You must provide an name and password!'
    })
  }

  // See if a user with the given name exists.
  User.findOne({ name: name }, function(err, existingUser) {
    if (err) { return next(err); }

    // If a user with name does exist, return an error
    if (existingUser) {
      return res.status(422).send( { error: 'Email is in use!' })
    }

    // If a user with an name does not exist, create and save use record
    const user = new User({
      name: name,
      password: password,
      traits: ['traits', 'about', 'you'],
      hitPoints: ['10/10'],
      expPoints: ['5000'],
    })

    // Save the record to the database
    user.save(function(err) {
      if (err) { return next(err); }

       // Respond to the request indicating the user was created
      res.json(user);
    });
  });

}
