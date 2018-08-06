var express = require('express');
var router = express.Router();

var cloudinary = require('../../../utility/cloudinary');

var auth = require('../../../utility/accessToken');
const request = require('request-promise');
var { userDb } = require('../../../db/user.js');

createUser = function(parsedRes, loginWith, user) {
  return new Promise(function(resolve) {
    let ret = {};

    if (user) {
      ret = user;
      ret.update_date = Date.now();
    }

    let picUrl = '';
    if (loginWith == 'facebook') {
      ret.name = parsedRes.name;
      ret.first_name = parsedRes.first_name;
      ret.last_name = parsedRes.last_name;
      ret.email = parsedRes.email;
      ret.facebook_id = parsedRes.id;
      picUrl = parsedRes.picture.data.url;
    } else {
      ret.name = parsedRes.name;
      ret.first_name = parsedRes.given_name;
      ret.last_name = parsedRes.family_name;
      ret.email = parsedRes.email;
      ret.link = parsedRes.link;
      ret.gender = parsedRes.gender;
      ret.google_id = parsedRes.id;
      picUrl = parsedRes.picture;
    }

    cloudinary.uploader.upload(picUrl, function(result) {
      ret.avatar = result;
      ret.avatar_url = result.url;
      ret.avatar_public_id = result.public_id;
      resolve(ret);
    });
  });
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
  let user1 = {};
  request(options)
    .then(fbRes => {
      parsedRes = JSON.parse(fbRes);
      if (parsedRes.email) {
        return userDb.getByEmail(parsedRes.email);
      } else {
        if (loginWith == 'facebook') {
          return userDb.getByFacebookId(parsedRes.id);
        } else {
          return userDb.getByGoogleId(parsedRes.id);
        }
      }
    })
    .then(user => {
      return createUser(parsedRes, loginWith, user).then(u => {
        if (user) {
          cloudinary.uploader.destroy(user.avatar.public_id, function(
            result
          ) {});

          return userDb.update(u);
        } else {
          return userDb.insert(u);
        }
      });
    })
    .then(u => {
      user1 = u;
      return auth.createAuthToken(u._id);
    })
    .then(val => {
      res.json({ authToken: val.authToken, user: user1 });
    })
    .catch(error => {
      res.json({ error: error });
    });
});

module.exports = router;
