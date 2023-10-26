const jwt = require('jsonwebtoken')
const {Tutor} = require('../model/tutor')

const login = (email)=> Tutor.findOne({email})

const generateToken = (user, secret)=> jwt.sign({user:user}, secret, {expiresIn:84600})


module.exports = {login, generateToken}