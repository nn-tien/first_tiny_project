var ObjectId = require('mongodb').ObjectID;
var { db } = require('./index.js');

module.exports.users = {
  //   getUserById(id) {
  //     db.MongoClient.connect(db.url)
  //       .then(conn => {
  //         let database = conn.db(db.database);

  //         let user = database
  //           .collection('users')
  //           .findOne({ _id: new ObjectId(id) });

  //         Promise.all([user])
  //           .then(function(value) {
  //             return value;
  //           })
  //           .catch(function(error) {
  //             database.close();
  //           });
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //   },

  a(x, y) {
    var ret = new Promise(function(resolve, reject) {
      if (x == 1) {
        reject(false);
      } else {
        resolve(x + y);
      }
    });

    return ret;
  },

  getById(id) {
    return db.MongoClient.connect(db.url)
      .then(conn => {
        let database = conn.db(db.database);

        return database
          .collection('users')
          .findOne({ _id: new ObjectId(id) })
          .then(value => {
            //database.close();
            return value;
          })
          .catch(function(error) {})
          .finally(function() {
            database.close();
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getById1(id) {
    return db.MongoClient.connect(db.url)
      .then(conn => {
        let database = conn.db(db.database);

        // return database
        //   .collection('users')
        //   .findOne({ _id: new ObjectId(id) })
        //   .then(value => {
        //     return value;
        //   })
        //   .catch(function(error) {
        //     database.close();
        //   });

        let u = database.collection('users').findOne({ _id: new ObjectId(id) });

        return Promise.all([u])
          .then(values => {
            return values[0];
          })
          .then(val => {
            database.close();
            return val;
          });
      })
      .catch(function(error) {});
  }
};
