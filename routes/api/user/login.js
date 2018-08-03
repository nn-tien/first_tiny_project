var express = require('express');
var router = express.Router();

var auth = require('../../../utility/accessToken');
const request = require('request-promise');
var { users } = require('../../../db/user.js');

createUser = function(parsedRes, loginWith, user) {
  let ret = {};

  if (user) {
    ret = user;
  }

  if (loginWith == 'facebook') {
    ret.name = parsedRes.name;
    ret.first_name = parsedRes.first_name;
    ret.last_name = parsedRes.last_name;
    ret.email = parsedRes.email;
    ret.avatar = parsedRes.picture.data.url;
    ret.facebook_id = parsedRes.id;
  } else {
    ret.name = parsedRes.name;
    ret.first_name = parsedRes.given_name;
    ret.last_name = parsedRes.family_name;
    ret.email = parsedRes.email;
    ret.avatar = parsedRes.picture;
    ret.link = parsedRes.link;
    ret.gender = parsedRes.gender;
    ret.google_id = parsedRes.id;
  }

  return ret;
};

router.post('/login', function(req, res, next) {
  var { accessToken, loginWith } = req.body;

  // you need permission for most of these fields
  const userFieldSet = 'id, name, first_name, last_name, picture, email';
  var options = {};
  if (loginWith == 'facebook') {
    options = {
      method: 'GET',
      url: 'https://graph.facebook.com/me/',
      qs: {
        access_token: accessToken,
        fields: userFieldSet
      },
      headers: {
        'content-type': 'application/json'
      }
    };
  } else {
    options = {
      method: 'GET',
      url: 'https://www.googleapis.com/oauth2/v1/userinfo/',
      qs: {
        access_token: accessToken
      },
      headers: {
        'content-type': 'application/json'
      }
    };
  }

  let parsedRes = {};
  request(options)
    .then(fbRes => {
      parsedRes = JSON.parse(fbRes);
      if (parsedRes.email) {
        return users.getByEmail(parsedRes.email);
      } else {
        if (loginWith == 'facebook') {
          return users.getByFacebookId(parsedRes.id);
        } else {
          return users.getByGoogleId(parsedRes.id);
        }
      }
    })
    .then(user => {
      let u = createUser(parsedRes, loginWith, user);
      if (user) {
        return users.update(u);
      } else {
        return users.insert(u);
      }
    })
    .then(u => {
      return auth.createAuthToken(u._id);
    })
    .then(val => {
      res.json({ authToken: val.authToken });
    })
    .catch(error => {
      res.json({ error: error });
    });
});

module.exports = router;
