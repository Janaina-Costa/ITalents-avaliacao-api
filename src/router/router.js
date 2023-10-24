const router = require('express').Router()

const tutorRouter = require('./tutor.router')

router.use('/', tutorRouter)

module.exports = router