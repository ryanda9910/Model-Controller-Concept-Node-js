const Departement = require("../Models/departement.model");

exports.findAll = (req, res) => {
  Departement.findAll((err, departement) => {
    if (err)
      res.status(400).json({
        status: 400,
        message: err,
      });
    res.status(200).json({
      status: 200,
      message: "Succes get data",
      data: departement,
    });
  });
};

exports.create = (req, res, error) => {
  const new_departement = req.body;
  if (
    (req.body.constructor === Object && Object.keys(req.body).length === 0)
  ) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Departement.create(new_departement, function (err, departement) {
      if (err) res.send(err);
      res.json({
        status: 201,
        message: "added successfully!",
        data: departement,
      });
    });
  }
};

exports.findById = (req, res) => {
  Departement.findById(req.params.id, (err, departement) => {
    if (err) {
      res.send(err);
      res.json({
        message: "Error id not Found",
        status: 400,
      });
    } else {
      res.json({
        message: "Succes get data",
        status: 200,
        data: departement,
      });
    }
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Departement.update(req.params.id, req.body, function (err, departement) {
      if (err) res.send(err);
      res.json({ status: 201, message: "successfully updated" });
    });
  }
};

exports.delete = (req, res) => {
  Departement.delete(req.params.id, function (err, departement) {
    if (err) res.send(err);
    res.json({ status: 201, message: "successfully delete" });
  });
};
