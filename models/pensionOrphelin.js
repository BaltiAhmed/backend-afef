const mongoose =require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')
const schema = mongoose.Schema;

const pensionOrphelinSchema = new schema({
    demande:{type:String,required:true},
    acteDeces:{type:String,required:true},
    releveServices:{type:String,required:true},
    extraitNaissOrphelin:{type:String,required:true},
    cinOrphelin:{type:String,required:true},
    declarationNonEmploi:{type:String,required:true},
    certificatInscritUniversitaire:{type:String,required:true},
    attestationNonAff:{type:String,required:true},
    attestationNonBenif:{type:String,required:true},
    carteHandicap:{type:String,required:true},
    jugementTutelle:{type:String,required:true},
    photoTuteur:{type:String,required:true},
    copieCinTuteur:{type:String,required:true},
    utilisateurId:{type:String,required:true},
    finish:{type:String,required:true},
})

pensionOrphelinSchema.plugin(uniqueValidator)

module.exports = mongoose.model('pensionOrphelin',pensionOrphelinSchema)