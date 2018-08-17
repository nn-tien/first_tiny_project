var express = require('express');
var router = express.Router();

var cloudinary = require('../../../utility/cloudinary');

var auth = require('../../../utility/accessToken');
var { roomDb } = require('../../../db/room.js');

router.post('/insert', function(req, res, next) {
  var { authToken, room } = req.body;

  console.log(authToken);
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

module.exports = router;
