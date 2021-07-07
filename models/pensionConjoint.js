const mongoose =require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')
const schema = mongoose.Schema;

const pensionConjointSchema = new schema({
    acteNotorieteDeces:{type:String,required:true},
    extraitNaissConjoint:{type:String,required:true},
    ficheRenseignemnt:{type:String,required:true},
    photoIdentite:{type:String,required:true},
    utilisateurId:{type:String,required:true},
    finish:{type:String,required:true},
})

pensionConjointSchema.plugin(uniqueValidator)

module.exports = mongoose.model('pensionConjoint',pensionConjointSchema)