const tutorService = require('../service/tutor.service')

const findAllTutors = async (req, res)=>{
    try{
        const tutor = await tutorService.findAll()
    return res.status(200).send(tutor)
    }catch(err){
        console.log(`Erro: ${err}`)
        return res.status(500).send('Internal server error')
    }
}

const findTutorById = async (req, res)=>{
    try{
        const {id} = req.params
        let found
        const tutor = await tutorService.findById(id)
        
        if(tutor !== null){
            found = true
        }

        if(!found){
           return res.status(404).send({message:'Not found'})
        }
        return res.status(200).send(tutor)
    }catch(err){
        console.log(`Erro: ${err}`)
        return res.status(500).send('Internal server error')
    }
}

const createTutor = async (req, res)=>{
    try{
        const {name, cpf, email, phone, socialmedia, address, pet} = req.body
        
        if(!name||!cpf||!email||!phone){
            return res.status(400).send({message:'Empty data is required' })
        }   


        const newTutor = await tutorService.create({
            name,
            cpf,
            email,
            phone,
            socialmedia,
            address,
            pet
        })
        return res.status(201).send(newTutor)

    }catch(err){
        console.log(`Erro:${err.message}`)
        return res.status(500).send({message: 'Erro interno do servidor'})  
    }
}

const updateTutor = async (req, res)=>{
   try{
    const {id} = req.params
    const {name, cpf, email, phone, socialmedia, address} = req.body
    let found
        const tutor = await tutorService.findById(id)
        
        if(tutor !== null){
            found = true
        }

        if(!found){
          return  res.status(404).send({message:'Not found'})
        }

        await tutorService.update(id,{name, cpf, email, phone, socialmedia, address})
        
        res.status(200).send({message:'Updated successfully'})

   }catch(err){
    console.log(`Erro:${err}`)
    return res.status(500).send({message: 'Internal server error'})
   }

}

const deleteTutor = async (req, res)=>{
    try{
        const {id} = req.params
       
        let found
            const tutor = await tutorService.findById(id)            
            if(tutor !== null){
                found = true
            }

            if(!found){
                res.status(404).send({message:'Not found'})
            }
    
            await tutorService.remove(id)
            
            res.status(200).send({message:'Deleted successfully'})
    
       }catch(err){
        console.log(`Erro:${err}`)
        return res.status(500).send({message: 'Internal server error'})
       }
}

module.exports = {findAllTutors, findTutorById, createTutor, updateTutor, deleteTutor}