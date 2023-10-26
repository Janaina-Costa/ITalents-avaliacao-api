//const {MongoClient, ServerApiVersion} = require('mongodb');

const client = require("./client")
const URL_DB_CLIENT = require('../settings')

const uri = URL_DB_CLIENT

const runDataBase = async()=>{
  await client.connect(uri)
  .then(()=>console.log('DB Connected..'))
    .catch((err)=>console.log(`Falha de conexão : ${err}`))
}

module.exports = runDataBase




