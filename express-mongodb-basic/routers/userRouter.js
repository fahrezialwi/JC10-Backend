let userController = require('../controllers/userController')
let router = require('express').Router()

router.get('/users', userController.getUsers)
router.get('/user', userController.getUserById)
router.post('/user', userController.addUser)

module.exports = router