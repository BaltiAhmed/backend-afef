const mongoose =require("mongoose")
const schema = mongoose.Schema;

const adminSchema = new schema({
    nom:{type:String,required:true},
    adresse:{type:String,required:true},
    tel:{type:String,required:true},
    fax:{type:String,required:true},
    long:{type:String,required:true},
    lat:{type:String,required:true}

})

module.exports = mongoose.model('agence',adminSchema)