var mongoose = require('./connection');
var QuickSearchSchema = require('./models/quick_search');
module.exports.quickSearchDb = {
  getByCity(city) {
    var QuickSearch = mongoose.model('QuickSearch', QuickSearchSchema);
    return QuickSearch.find({ city: city })
      .exec()
      .then(function(u) {
        return u;
      });
  },
  insert(model) {
    var QuickSearchModel = mongoose.model('QuickSearch', QuickSearchSchema);
    var quickSearch = new QuickSearchModel(model);
    return quickSearch.save().then(function(r) {
      return r;
    });
  }
};
