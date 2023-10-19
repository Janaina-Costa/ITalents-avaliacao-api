const express = require('express')
const run = require('../db')
const runDataBase = require('../db')
const routes = require('./router/router')



const PORT = 3333
const HOST = 'http://localhost'

const app = express()
app.use(express.json())
app.use('/api',routes)

//run().catch(console.dir)
runDataBase()


app.get('/', (req, res)=>res.send('Servidor de pé'))

app.listen(PORT, ()=>console.log(`Running at ${HOST}:${PORT}`))