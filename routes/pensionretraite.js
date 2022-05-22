const express = require("express");
const route = express.Router();

const pensionretraiteControllers = require("../controllers/pensionretraite");

const { check } = require("express-validator");
const fileUpload = require("../middleware/file-upload");

route.post(
  "/ajout",
  fileUpload.single("image"),

  pensionretraiteControllers.ajout
);

route.patch(
  "/updatearreteMISEretraite/:id",
  fileUpload.single("image"),
  pensionretraiteControllers.updatearreteMISEretraite
);

route.patch(
  "/updateextraitNaissance/:id",
  fileUpload.single("image"),
  pensionretraiteControllers.updateextraitNaissance
);

route.patch(
  "/updatephotoIdent/:id",
  fileUpload.single("image"),
  pensionretraiteControllers.updatephotoIdent
);

route.get("/", pensionretraiteControllers.getPensionR);
route.get("/:id", pensionretraiteControllers.getPensionRById);
route.patch("/:id", pensionretraiteControllers.updatedStatus);


module.exports = route;
