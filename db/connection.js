var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/first_tiny_project');

// mongoose.connect(
//   'mongodb+srv://admin:Lieu0707@cluster0-gxamj.mongodb.net/first_tiny_project?retryWrites=true'
// );

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error : '));
db.once('open', function() {
  console.log('Connection ok!');
});

module.exports = mongoose;
