var express = require('express');
var router = express.Router();
var { db } = require('../db/index.js');
var { users } = require('../db/user.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  // users.getById('5b6083df8afaee67af85e6d5').then(u => {
  //   if (u) {
  //     console.log(u);
  //   } else {
  //     console.log('not found');
  //   }
  // });

  // users.inser().then(u => {
  //   console.log(u);
  // });

  // users;
  // .a(1, 7)
  // .then(value => {
  //   console.log(value);
  // })
  // .catch(function(error) {
  //   console.log(error);
  // });
  // var u = users.getById1('5b6083df8afaee67af85e6d5');
  // console.log(u);
  // db.MongoClient.connect(db.url)
  //   .then(conn => {
  //     let database = conn.db(db.database);

  //     let cus = database
  //       .collection('users')
  //       .find({})
  //       .toArray();

  //     Promise.all([cus])
  //       .then(function(value) {
  //         //let c = value[0];
  //         console.log(value[0]);
  //         conn.close();
  //       })
  //       .catch(function(error) {
  //         database.close();
  //       });
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });

  res.render('index', { title: 'Express' });
});

module.exports = router;
