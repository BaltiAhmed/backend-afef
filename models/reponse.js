const mongoose =require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')
const schema = mongoose.Schema;

const reponseSchema = new schema({
    description:{type:String,required:true},
    utilisateurId:{type:String,required:true},
})

reponseSchema.plugin(uniqueValidator)

module.exports = mongoose.model('reponse',reponseSchema)