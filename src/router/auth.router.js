const { authUser } = require('../controllers/auth.controller')

const router = require('express').Router()

router.get('/auth', authUser)

module.exports = router