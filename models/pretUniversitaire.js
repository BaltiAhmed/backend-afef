const mongoose =require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')
const schema = mongoose.Schema;

const pretuniversitaireSchema = new schema({
    demande:{type:String,required:true},
    copieCINParent:{type:String,required:true},
    copieCINEtudiant:{type:String,required:true},
    attestationSalaire:{type:String,required:true},
    declarationREV:{type:String,required:true},
    certificatInscrit:{type:String,required:true},
    rib:{type:String,required:true},
    utilisateurId:{type:String,required:true},
    finish:{type:String,required:true},
})

pretuniversitaireSchema.plugin(uniqueValidator)

module.exports = mongoose.model('pretuniversitaire',pretSchema)