const mongoose =require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')
const schema = mongoose.Schema;

const utilisateurSchema = new schema({
    nom:{type:String,required:true},
    prenom:{type:String,required:true},
    adresse:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    Dnaissance:{type:String,required:true},
    tel:{type:String,required:true},
    password:{type:String,required:true,minlenght:8},
    matriculeCNRPS:{type:String},
    allocationVieillesse:[{type:mongoose.Types.ObjectId,ref:'allocationVieillesse'}],
    attestation:[{type:mongoose.Types.ObjectId,ref:'attestation'}],
    capitalDeces:[{type:mongoose.Types.ObjectId,ref:'capitalDeces'}],
    pensionCivile:[{type:mongoose.Types.ObjectId,ref:'pensionCivile'}],
    pensionConjoint:[{type:mongoose.Types.ObjectId,ref:'pensionConjoint'}],
    pensionOrphelin:[{type:mongoose.Types.ObjectId,ref:'pensionOrphelin'}],
    pensionretraite:[{type:mongoose.Types.ObjectId,ref:'pensionretraite'}],
    prestationsoutien:[{type:mongoose.Types.ObjectId,ref:'prestationSoutien'}],
    pretpersonnel:[{type:mongoose.Types.ObjectId,ref:'pretpersonnel'}],
    pretUniversitaire:[{type:mongoose.Types.ObjectId,ref:'pretUniversitaire'}],
    reclamations:[{type:mongoose.Types.ObjectId,ref:'reclamation'}],
    attestationNonAffiliation:[{type:mongoose.Types.ObjectId,ref:'attestationNonAffiliation'}],
    attestationAffiliation:[{type:mongoose.Types.ObjectId,ref:'attestationAffiliation'}],
    nonBenifisPret:[{type:mongoose.Types.ObjectId,ref:'nonBenifisPret'}]

})

utilisateurSchema.plugin(uniqueValidator)

module.exports = mongoose.model('utilisateur',utilisateurSchema)