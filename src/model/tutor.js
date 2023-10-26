const { Schema, model } = require('mongoose')

const tutorSchema = new Schema({
    name: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password:{type:String, required:true},
    phone: { type: String, required: true },
    socialmedia: { type: String },
    address: {
        cep: { type: String },
        street: { type: String },
        number: { type: String },
        complement: { type: String },
        neighborhood: { type: String },
        city: { type: String },
    },
    pet:[
        {   
            name: { type: String, required:true },
            age: { type: Number, required:true, min:0, max:30 },
            weight: { type: Number, required:true },
            height: { type: Number, required:true },
            size:{
                type:String, 
                enum:['pequeno', 'medio', 'grande']
            },
                
            breed: { type: String },
        }
    ]
}, {timestamps:true})

const Tutor = model('Tutor', tutorSchema)

module.exports = { Tutor, tutorSchema }