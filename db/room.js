var mongoose = require('./connection');
var RoomSchema = require('./models/room');

module.exports.roomDb = {
  getById(id) {
    var RoomModel = mongoose.model('Room', RoomSchema);
    return RoomModel.findOne({ _id: new mongoose.Types.ObjectId(id) })
      .exec()
      .then(function(r) {
        return r;
      });
  },
  getAllData() {
    var RoomModel = mongoose.model('Room', RoomSchema);
    return RoomModel.find({})
      .exec()
      .then(function(r) {
        return r;
      });
  },
  insert(model) {
    var RoomModel = mongoose.model('Room', RoomSchema);
    var room = new RoomModel(model);
    return room.save().then(function(r) {
      return r;
    });
  },
  update(model) {
    var RoomModel = mongoose.model('Room', RoomSchema);
    var room = new RoomModel(model);
    return room.save().then(function(r) {
      return r;
    });
  }
};
