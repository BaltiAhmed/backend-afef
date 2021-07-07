const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const schema = mongoose.Schema;

const allocationVieillesseSchema = new schema({
  demandeAllocation: { type: String, unique: true },
  arreteMiseRetraite: { type: String, required: true },
  releveServices: { type: String, required: true },
  photoIdentite: { type: String, required: true },
  extraitNaissance: { type: String, required: true },
  utilisateurId: { type: String, required: true },
  finish: { type: String, required: true },
});

allocationVieillesseSchema.plugin(uniqueValidator);

module.exports = mongoose.model(
  "allocationVieillesse",
  allocationVieillesseSchema
);
