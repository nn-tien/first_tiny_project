var mongoose = require('./connection');
var UserSchema = require('./models/user');
module.exports.users = {
  getById(id) {
    var User = mongoose.model('User', UserSchema);
    return User.findOne({ _id: id })
      .exec()
      .then(function(u) {
        return u;
      });
  },
  inser() {
    var User = mongoose.model('User', UserSchema);
    var user = new User({
      name: 'hhhhh',
      first_name: '',
      last_name: '',
      email: ''
    });
    return user.save().then(function(u) {
      return u;
    });
  }
};
