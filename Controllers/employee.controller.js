const Employee = require("../Models/employee.model");

exports.findAll = ((req, res)=>{
  Employee.findAll((err, employee)=>{
    if (err) res.status(400).json({
      status:400,
      message:err
    })
    res.status(200).json({
      status:200,
      message: "Succes get data",
      data: employee
    })
  });
})

exports.create = (req, res)=>{
  const new_employee = req.body;

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).json({ error: true, message: "Please provide all required field" })
  } else {
    Employee.create(new_employee, function (err, employee) {
      if (err) res.status(400).json({
        status:400,
        message:err
      })
      res.status(201).json({
        status:201,
        message: "added successfully!",
        data: employee,
      })
    });
  }
}

exports.findById = (req, res)=> {
  Employee.findById(req.params.id, ((err, employee)=>{
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
        data: employee,
      });
    }
  }))
}

exports.update = ((req, res)=>{
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).json({ error: true, message: "Please provide all required field" })
  } else {
    Employee.update(
      req.params.id,
      req.body,
      ((err, employee)=> {
        if (err) res.status(400).json({
          status:400,
          message:err,
        })
        res.status(201).json({
          status:201,
          message: "added successfully!",
          data: employee,
        })
      }
    ))
  }
})

exports.delete = ((req, res)=>{
  Employee.delete(req.params.id, ((err, employee) =>{
    if (err) res.status(400).json({
      status:400,
      message:err,
    })
    res.status(201).json({
      status:201,
      message: "delete successfully!",
      data: employee,
    })
  }
))
})
