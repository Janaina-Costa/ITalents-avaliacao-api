const loginService = require('../service/login.service')
const SECRET_TOKEN_HASH = require('../settings')

const secret = SECRET_TOKEN_HASH

const loginUser = async (req, res)=>{
    try{
        const {email, password} = req.body
        const user = await loginService.login(email)

        if(!user || password !== user.password){
           return res.status(400).send({message: 'User or password does not exist'})
        }

        const token = loginService.generateToken(user, secret)

      return  res.send({message: 'User logged successful',token})
    }catch(err){
        console.log(err)
        return res.status(500).send({message: 'Internal server error'})
    }

}

module.exports = {loginUser}