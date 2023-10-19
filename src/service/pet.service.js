const {Pet} = require('../../model/pet')

const findAll = () => {
    return Pet.find()
}

const findById = (id) => {
    return Pet.findById(id)
}

const create = (pet) => {
    return Pet.create({ ...pet })
}

const update = (id, pet) => {
    return Pet.findByIdAndUpdate(id, { ...pet }, { returnDocument: 'after' })
}

const remove = (id) => {
    return Pet.findByIdAndDelete(id)
}

module.exports = { findAll, findById, create, update,remove }