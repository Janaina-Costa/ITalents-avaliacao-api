const SECRET_TOKEN_HASH = require('../settings')
const jwt = require('jsonwebtoken')

const secret = SECRET_TOKEN_HASH


const authUser = (req, res)=>{
    try{
        const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).send({message:'Empty token!'})
    }

    const parts = authHeader.split(' ')
    if(parts.length !== 2){
        return res.status(401).send({message:'Invalid token!'})
    }
    const matchBearer = /^Bearer$/i
    const [scheme, token] = parts

    if(!matchBearer.test(scheme)){
        return res.status(401).send({message:'Poorly formatted token!'})
    }

    jwt.verify(token, secret, async(error, decoded)=>{
        if(error){
            console.log(`Erro: ${error}`)
            res.status(500).send({message:'Internal server error'})
        }
        return res.send(decoded)
    })
    }catch(err){
        console.log(`Erro: ${err}`)
        res.status(500).send({message:'Internal server error'})
    }
}

module.exports = { authUser}