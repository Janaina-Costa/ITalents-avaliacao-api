const router = require('express').Router()

const tutorRouter = require('./tutor.router')
const loginRouter = require('./login.router')
const authRouter = require('./auth.router')

router.use('/', tutorRouter)
router.use('/', loginRouter)
router.use('/', authRouter)

module.exports = router