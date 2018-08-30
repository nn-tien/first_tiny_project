var express = require('express');
var router = express.Router();

var cloudinary = require('../../../utility/cloudinary');

var auth = require('../../../utility/accessToken');
var { roomDb } = require('../../../db/room.js');
var { quickSearchDb } = require('../../../db/quick_search');

router.post('/insert', function(req, res, next) {
  var { authToken, room } = req.body;

  console.log(room);
  var l = {};
  l.title = 'test';
  roomDb
    .insert(l)
    .then(r => {
      res.json({ room: r });
    })
    .catch(error => {
      res.json({ error: error });
    });
});

router.post('/getData', function(req, res, next) {
  var { authToken, room } = req.body;

  var quickSearchData = quickSearchDb.getByCity(0);
  var newRoomData = roomDb.getAllData();
  var newRoomData1 = roomDb.getAllData();

  Promise.all([quickSearchData, newRoomData, newRoomData1]).then(values => {
    res.json(values);
  });
});

module.exports = router;
