var mongoose = require('../connection');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var RoomSchema = new Schema({
  user_id: ObjectId,
  title: { type: String, default: '' },
  city: { type: Number, default: 0 },
  district: { type: Number, default: 0 },
  ward: { type: Number, default: 0 },
  address: { type: String, default: '' },
  area: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
  images: { type: Array, default: [] },
  description: { type: String, default: '' },
  type: { type: Number, default: 0 },
  visible: { type: Boolean, default: true },
  create_date: { type: Date, default: Date.now },
  update_date: { type: Date, default: Date.now }
});

RoomSchema.pre('save', function(next) {
  this.increment();
  return next();
});

module.exports = RoomSchema;
