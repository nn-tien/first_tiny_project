var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/first_tiny_project');

// mongoose.connect(
//   'mongodb://tinyproject:tinyproject1@ds137661.mlab.com:37661/tinyproject'
// );

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error : '));
db.once('open', function() {
  console.log('Connection ok!');
});

module.exports = mongoose;
