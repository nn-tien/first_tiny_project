var mongoose = require('../connection');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
  facebook_id: { type: String, default: '' },
  google_id: { type: String, default: '' },
  name: { type: String, default: '' },
  first_name: { type: String, default: '' },
  last_name: { type: String, default: '' },
  link: { type: String, default: '' },
  gender: { type: String, default: '' },
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  avatar: { type: String, default: '' },
  type: { type: Number, default: 0 },
  create_date: { type: Date, default: Date.now },
  update_date: { type: Date, default: Date.now }
});

UserSchema.pre('save', function(next) {
  this.increment();
  return next();
});

module.exports = UserSchema;
