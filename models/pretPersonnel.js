const mongoose =require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')
const schema = mongoose.Schema;

const pretpersonnelSchema = new schema({
    demandepret:{type:String,required:true},
    copieCIN:{type:String,required:true},
    rib:{type:String,required:true},
    utilisateurId:{type:String,required:true},
    finish:{type:String,required:true},
})

pretpersonnelSchema.plugin(uniqueValidator)

module.exports = mongoose.model('pretpersonnel',pretpersonnelSchema)