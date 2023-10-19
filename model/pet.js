const {Schema, model} = require('mongoose')
const {tutorSchema} = require('./tutor')

const petSchema = new Schema({
  _id: Schema.Types.UUID,
  name: { type: String, required:true },
  age: { type: Number, required:true, min:0, max:30 },
  weight: { type: Number, required:true },
  height: { type: Number, required:true },
  size:{type:String, enum:['pequeno','médio', 'grande']},
  breed: { type: String  },
  tutor:{
    type:[tutorSchema]
  }
  
}, {timestamps:true});

const Pet = model('Pet', petSchema)

module.export = Pet


