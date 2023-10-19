const router = require('express').Router()

const petRouter = require('./pet.router')
const tutorRouter = require('./tutor.router')

router.use('/', petRouter)
router.use('/', tutorRouter)

module.exports = router