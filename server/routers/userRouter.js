const express = require('express')
const router = express.Router()

const userModel = require('../models/userModel')
const userController = require('../controllers/userController')

router.get('/',userController.get )
router.get('/:id',userController.getById)

router.post('/', userController.add)

router.delete('/',userController.deleteById )




module.exports = router