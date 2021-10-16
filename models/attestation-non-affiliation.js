    const mongoose =require("mongoose")
    const uniqueValidator = require('mongoose-unique-validator')
    const schema = mongoose.Schema;

    const attestationNonAffiliation = new schema({
        centre:{type:String,required:true},
        nom:{type:String,required:true},
        CIN:{type:String,required:true},
        dateCIN:{type:String,required:true},
        DateNaissance:{type:String,required:true},
        lieuNaissance:{type:String,required:true},
        finish:{type:String,required:true},


    })



    module.exports = mongoose.model('attestationNonAffiliation',attestationNonAffiliation)