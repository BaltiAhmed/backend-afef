const mongoose =require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')
const schema = mongoose.Schema;

const adminSchema = new schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minlenght:8},
    type:{type:String,required:true}

})

adminSchema.plugin(uniqueValidator)

module.exports = mongoose.model('admin',adminSchema)