const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reclamationSchema = new schema({
  objet: { type: String, required: true },
  message: { type: String, required: true },
  utilisateur: { type: String, ref: "utilisateur" },
  finish: { type: Boolean, required: true },
});

module.exports = mongoose.model("reclamation", reclamationSchema);
