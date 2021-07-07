const express = require("express");
const route = express.Router();

const pensionConjointControllers = require("../controllers/pensionConjoint");

const { check } = require("express-validator");
const fileUpload = require("../middleware/file-upload");

route.post(
  "/ajout",
  fileUpload.single("image"),
  pensionConjointControllers.ajout
);

route.patch(
  "/updateacteNotorieteDeces/:id",
  fileUpload.single("image"),
  pensionConjointControllers.updateacteNotorieteDeces
);

route.patch(
  "/updateextraitNaissConjoint/:id",
  fileUpload.single("image"),
  pensionConjointControllers.updateextraitNaissConjoint
);

route.patch(
  "/updatephotoIdentite/:id",
  fileUpload.single("image"),
  pensionConjointControllers.updatephotoIdentite
);

route.get("/", pensionConjointControllers.getPensionCon);
route.get("/:id", pensionConjointControllers.getPensionConById);
route.delete("/:id",pensionConjointControllers.deletePensionConjoin)

module.exports = route;
