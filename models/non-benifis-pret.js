const mongoose =require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')
const schema = mongoose.Schema;

const nomBenifisPretSchema = new schema({
    matricule:{type:String,required:true},
    centre:{type:String,required:true},
    nom:{type:String,required:true},
    CIN:{type:String,required:true},
    dateCIN:{type:String,required:true},
    DateNaissance:{type:String,required:true},
    lieuNaissance:{type:String,required:true},
    finish:{type:String,required:true},
})

module.exports = mongoose.model('nonBenifisPret',nomBenifisPretSchema)