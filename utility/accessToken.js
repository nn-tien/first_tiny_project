var jwt = require('jsonwebtoken');
var authTokenSecret = 'e3ccb5b6957d7ceee3b47d80cee99655';

module.exports = {
  createAuthToken: function(id) {
    return new Promise(function(resolve, reject) {
      jwt.sign(
        {
          id: id
        },
        authTokenSecret,
        {},
        function(err, token) {
          if (err) {
            reject(err);
          } else {
            resolve({ authToken: token });
          }
        }
      );
    });
  },

  getId: function(accessToken) {
    return new Promise(function(resolve, reject) {
      jwt.verify(accessToken, authTokenSecret, function(err, decoded) {
        if (err) {
          reject(err);
        } else if (!decoded) {
          reject('invalidToken:notFound:id');
        } else {
          resolve(decoded.id);
        }
      });
    });
  }
};
