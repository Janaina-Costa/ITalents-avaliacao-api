const { Schema, model } = require('mongoose')

const tutorSchema = new Schema({
    name: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    socialmedia: { type: String },
    address: {
        cep: { type: String },
        street: { type: String },
        number: { type: String },
        complement: { type: String },
        neighborhood: { type: String },
        city: { type: String },
    }
})

const Tutor = model('Tutor', tutorSchema)

module.exports = { Tutor, tutorSchema }