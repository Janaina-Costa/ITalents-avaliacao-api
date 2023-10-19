const tutorService = require('../service/tutor.service')

const findAllTutors = async (req, res)=>{
    const pet = await tutorService.findAll()
    return res.status(200).send(pet)
}

const findTutorById = async (req, res)=>{
    try{
        const {id} = req.params
        let found
        const pet = await tutorService.findById(id)
        
        if(pet !== null){
            found = true
        }

        if(!found){
            res.status(404).send({message:'Not found'})
        }
        return res.status(200).send(pet)
    }catch(err){
        console.log(`Erro: ${err}`)
        return res.status(500).send('Internal server error')
    }
}

const createTutor = async (req, res)=>{
    try{
        const {name, cpf, email, phone, socialmedia, address} = req.body

        if(!name||!cpf||!email||!phone){
            return res.status(400).send({message:'Empty data is required' })
        }

        const newTutor = await tutorService.create({
            name,
            cpf,
            email,
            phone,
            socialmedia,
            address
        })
        return res.status(201).send(newTutor)

    }catch(err){
        console.log(`Erro:${err}`)
        return res.status(500).send({message: 'Tutor has already been registered'})
    }
}

const updateTutor = async (req, res)=>{

}

const deleteTutor = async (req, res)=>{

}

module.exports = {findAllTutors, findTutorById, createTutor, updateTutor, deleteTutor}