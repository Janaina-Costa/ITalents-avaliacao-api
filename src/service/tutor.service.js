const {Tutor} = require('../../model/tutor')

const findAll = () => {
    return Tutor.find()
}

const findById = (id) => {
    return Tutor.findById(id)
}

const create = (tutor) => {
    return Tutor.create({ ...tutor })
}

const update = (id, tutor) => {
    return Tutor.findByIdAndUpdate(id, { ...tutor }, { returnDocument: 'after' })
}

const remove = (id) => {
    return Tutor.findByIdAndDelete(id)
}

module.exports = { findAll, findById, create, update,remove }