var mongoose = require('./connection');
var UserSchema = require('./models/user');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
module.exports.userDb = {
  getById(id) {
    var User = mongoose.model('User', UserSchema);
    return User.findOne({ _id: new mongoose.Types.ObjectId(id) })
      .exec()
      .then(function(u) {
        return u;
      });
  },
  getByFacebookId(id) {
    var User = mongoose.model('User', UserSchema);
    return User.findOne({ facebook_id: id })
      .exec()
      .then(function(u) {
        return u;
      });
  },
  getByGoogleId(id) {
    var User = mongoose.model('User', UserSchema);
    return User.findOne({ google_id: id })
      .exec()
      .then(function(u) {
        return u;
      });
  },
  getByEmail(email) {
    var User = mongoose.model('User', UserSchema);
    return User.findOne({ email: email })
      .exec()
      .then(function(u) {
        return u;
      });
  },
  insert(u) {
    var User = mongoose.model('User', UserSchema);
    var user = new User(u);
    return user.save().then(function(u1) {
      return u1;
    });
  },
  update(u) {
    var User = mongoose.model('User', UserSchema);
    var user = new User(u);
    return user.save().then(function(u1) {
      return u1;
    });
  }
};
