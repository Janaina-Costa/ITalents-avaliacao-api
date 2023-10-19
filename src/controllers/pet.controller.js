const petService = require('../src/service/pet.service')

const findAllPets = async (req, res)=>{
    const pet = await petService.findAll()
    return res.status(200).send(pet)
}

const findPetById = async (req, res)=>{
    try{
        const {id} = req.params
        let found
        const pet = await petService.findById(id)
        
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

const createPet = async (req, res)=>{
    try{
        const {name, age, weight, height, breed, } = req.body
    }catch(err){

    }
}

const updatePet = async (req, res)=>{

}

const deletePet = async (req, res)=>{

}
