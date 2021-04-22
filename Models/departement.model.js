const dbConn = require("../config/db.config");

let Departement = (departement) => {
  this.departement_id = departement.departement_id;
  this.departement_name = departement.departement_name;
  this.created_at = new Date();
  this.updated_at = new Date();
};
Departement.create = function (newDepart, result) {
  dbConn.query("INSERT INTO departement set ?", newDepart, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  })
};
Departement.findById = function (id, result) {
  dbConn.query(
    "SELECT  * from departement where departement_id = ? ",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};


Departement.findAll = function (result) {
  dbConn.query("SELECT * from departement", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employees : ", res);
      result(null, res);
    }
  });
};

Departement.update = function (id, departement, result) {
  dbConn.query(
    "UPDATE departement SET departement_name=? WHERE departement_id = ?",
    [
      departement.departement_name,
      id
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err,null);
      } else {
        console.log("RESPON",res)
        result(null, res);
      }
    }
  );
};
Departement.delete = function (id, result) {
  dbConn.query(
    "DELETE FROM departement WHERE departement_id = ?",
    [id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Departement;
