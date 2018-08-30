var mongoose = require('../connection');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var QuickSearchSchema = new Schema({
  city: { type: Number, default: 0 },
  district: { type: Number, default: 0 },
  image_url: { type: String, default: '' },
  create_date: { type: Date, default: Date.now },
  update_date: { type: Date, default: Date.now }
});

QuickSearchSchema.pre('save', function(next) {
  this.increment();
  return next();
});

module.exports = QuickSearchSchema;
