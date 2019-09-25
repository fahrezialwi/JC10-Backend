var express = require('express')
var router = express.Router()
const { authController } = require('../controllers')

router.get('/login', authController.login)
router.post('/register', authController.register)
router.get('/sendverifymail', authController.sendVerifyMail)
router.get('/verify', authController.verify)
module.exports = router