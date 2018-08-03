var mongoose = require('../connection');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
  facebook_id: ObjectId,
  google_id: ObjectId,
  name: { type: String, default: '' },
  first_name: { type: String, default: '' },
  last_name: { type: String, default: '' },
  gender: { type: String, default: '' },
  email: { type: String, default: '' },
  avatar: { type: String, default: '' },
  type: { type: Number, default: 0 },
  create_date: { type: Date, default: Date.now },
  update_date: { type: Date, default: Date.now }
});

module.exports = UserSchema;
