const express = require('express')
const employeeController = require('../Controllers/employee.controller');
const verifyToken = require('../middleware/verifyToken');


const router= express.Router();

router.get('/',verifyToken ,employeeController.findAll)

router.post('/',verifyToken,employeeController.create)

router.get('/:id',verifyToken ,employeeController.findById)

router.put('/:id',verifyToken,employeeController.update)

router.delete('/:id',verifyToken,employeeController.delete)

module.exports=router;