const express = require('express')
const departementController = require('../Controllers/departement.controller');
const verifyToken = require('../middleware/verifyToken');


const router= express.Router();

router.get('/',verifyToken,departementController.findAll)

router.post('/',verifyToken,departementController.create)

router.get('/:id',verifyToken,departementController.findById)

router.put('/:id',verifyToken,departementController.update)

router.delete('/:id',verifyToken,departementController.delete)

module.exports=router;