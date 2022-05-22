const mongoose = require("mongoose");
const schema = mongoose.Schema;

const notificationSchema = new schema({
  sujet: { type: String, required: true },
  message: { type: String, required: true },
  idUtilisateur: { type: String, required: true },
});

module.exports = mongoose.model("notification", notificationSchema);
