const mongoose =require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')
const schema = mongoose.Schema;

const pensionCivileSchema = new schema({
    decisionMISEretraite:{type:String,required:true},
    releveService:{type:String,required:true},
    utilisateurId:{type:String,required:true},
    finish:{type:String,required:true},
})

pensionCivileSchema.plugin(uniqueValidator)

module.exports = mongoose.model('pensionCivile',pensionCivileSchema)