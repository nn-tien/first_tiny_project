var express = require('express');
var router = express.Router();

// var getUserIdFromAccessToken = require('../../../utility/accessToken');

var jwt = require('jsonwebtoken');
var accessTokenSecret = 'e3ccb5b6957d7ceee3b47d80cee99655';

function getUserIdFromAccessToken(accessToken, loginWith) {
  return new Promise(function(resolve, reject) {
    jwt.verify(accessToken, accessTokenSecret, function(err, decoded) {
      if (err) {
        reject(err);
      } else if (!decoded.data || !decoded.data.userId) {
        reject('invalidToken:notFound:userId');
      } else {
        resolve(decoded.data.userId);
      }
    });
  });
}

router.post('/login', function(req, res, next) {
  var { accessToken, loginWith } = req.body;
  console.log(accessToken);
  res.json({ message: accessToken });
  //   getUserIdFromAccessToken(accessToken, loginWith).then(userId => {
  //     res.json({ message: userId });
  //   });
});

module.exports = router;
