const express = require('express')
const runDataBase = require('../db')
const routes = require('./router/router')



const PORT = 3333
const HOST = 'http://localhost'

const app = express()
app.use(express.json())
app.use('/api',routes)

runDataBase()


app.listen(PORT, ()=>console.log(`Running at ${HOST}:${PORT}`))