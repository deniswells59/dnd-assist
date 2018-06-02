const
  User = require('../models/user');

exports.update = function(req, res) {
  const newData = req.body;

  User.findByIdAndUpdate(req.user._id, newData, () => {
    res.end();
  });
}
