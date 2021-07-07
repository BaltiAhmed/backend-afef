const mongoose =require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')
const schema = mongoose.Schema;

const capitalDecesSchema = new schema({
    ficheRenseignement:{type:String,required:true},
    acteDeces:{type:String,required:true},
    extraitNaissConjoint:{type:String,required:true},
    cinConjoint:{type:String,required:true},
    utilisateurId:{type:String,required:true},
    finish:{type:String,required:true},
})

capitalDecesSchema.plugin(uniqueValidator)

module.exports = mongoose.model('capitalDeces',capitalDecesSchema)