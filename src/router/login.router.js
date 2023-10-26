const {  loginUser} = require('../controllers/login.controller')

const router = require('express').Router()

router.post('/login', loginUser)

module.exports = router