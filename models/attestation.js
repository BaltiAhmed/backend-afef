const mongoose =require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')
const schema = mongoose.Schema;

const attestationSchema = new schema({
    nom:{type:String,required:true},
    prenom:{type:String,required:true},
    tel:{type:String,required:true},
    utilisateurId:{type:String,required:true},
    finish:{type:String,required:true},
})

attestationSchema.plugin(uniqueValidator)

module.exports = mongoose.model('attestation',attestationSchema)