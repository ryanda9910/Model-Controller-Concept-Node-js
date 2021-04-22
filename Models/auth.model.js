const dbConn = require("../config/db.config");

let Users = (users) => {
  this.users = users.user_id;
  this.email = users.email;
  this.username = users.username;
  this.password = users.password;
  this.created_at = new Date();
  this.updated_at = new Date();
};

Users.registerCheck = (data) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users WHERE username=? OR email=?";
    dbConn.query(query, [data.username, data.email], (err, response) => {
      if (!err) {
        resolve(response);
      } else {
        reject(response);
      }
    });
  });
};

Users.registerUser = (data) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO users SET ?";
    dbConn.query(query, data, (err, response) => {
      if (!err) {
        resolve(response);
      } else {
        reject(err);
      }
    });
  });
};

Users.loginUser = (data) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM  users WHERE username=?";
    dbConn.query(query, data.username, (err, response) => {
      if (!err) {
        resolve(response);
      } else {
        reject(err);
      }
    });
  });
};

module.exports = Users;
