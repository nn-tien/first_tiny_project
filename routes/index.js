var express = require('express');
var router = express.Router();
var { db } = require('../db/index.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.MongoClient.connect(db.url)
    .then(conn => {
      let database = conn.db(db.database);

      let cus = database
        .collection('users')
        .find({})
        .toArray();

      Promise.all([cus])
        .then(function(value) {
          //let c = value[0];
          console.log(value[0]);
          conn.close();
        })
        .catch(function(error) {
          database.close();
        });
    })
    .catch(function(error) {
      console.log(error);
    });

  res.render('index', { title: 'Express' });
});

module.exports = router;
