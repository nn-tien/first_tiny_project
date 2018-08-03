var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
  var { accessToken, loginWith } = req.body;

  res.json({ message: accessToken });
});

module.exports = router;
