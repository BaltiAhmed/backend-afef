const mongoose =require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')
const schema = mongoose.Schema;

const prestationSoutienSchema = new schema({
    demandeLocation:{type:String,unique:true},
    attestaionSalAffilie:{type:String,required:true},
    attestaionSalConjoint:{type:String,required:true},
    extraitNaissanceEnfant:{type:String,required:true},
    copieDecisionMutation:{type:String,required:true},
    copieContratLocation:{type:String,required:true},
    copieCINaffilie:{type:String,required:true},
    copieCINconjoint:{type:String,required:true},
    utilisateurId:{type:String,required:true},
    finish:{type:String,required:true},
})

prestationSoutienSchema.plugin(uniqueValidator)

module.exports = mongoose.model('prestationSoutien',prestationSoutienSchema)