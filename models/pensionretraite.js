const mongoose =require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')
const schema = mongoose.Schema;

const pensionretraiteSchema = new schema({
    arreteMISEretraite:{type:String,required:true},
    releveService:{type:String,required:true},
    photoIdent:{type:String,required:true},
    extraitNaissance:{type:String,required:true},
    utilisateurId:{type:String,required:true},
    finish:{type:String,required:true},
})

pensionretraiteSchema.plugin(uniqueValidator)

module.exports = mongoose.model('pensionretraite',pensionretraiteSchema)