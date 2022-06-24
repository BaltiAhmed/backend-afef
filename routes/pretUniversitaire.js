const express = require("express");
const route = express.Router();

const pretUniversitaireControllers = require("../controllers/pretUniversitaire");

const { check } = require("express-validator");

const fileUpload = require("../middleware/file-upload");

route.post(
  "/ajout",
  fileUpload.single("image"),
  pretUniversitaireControllers.ajout
);

route.patch(
  "/updaterib/:id",
  fileUpload.single("image"),
  pretUniversitaireControllers.updaterib
);

route.patch(
  "/updatecopieCINParent/:id",
  fileUpload.single("image"),
  pretUniversitaireControllers.updatecopieCINParent
);

route.patch(
  "/updatecopieCINEtudiant/:id",
  fileUpload.single("image"),
  pretUniversitaireControllers.updatecopieCINEtudiant
);

route.patch(
  "/updateattestationSalaire/:id",
  fileUpload.single("image"),
  pretUniversitaireControllers.updateattestationSalaire
);

route.patch(
  "/updatedeclarationREV/:id",
  fileUpload.single("image"),
  pretUniversitaireControllers.updatedeclarationREV
);

route.patch(
  "/updatecertificatInscrit/:id",
  fileUpload.single("image"),
  pretUniversitaireControllers.updatecertificatInscrit
);

route.get("/", pretUniversitaireControllers.getPretUniv);
route.get("/:id", pretUniversitaireControllers.getPretUnivById);

route.patch("/:id", pretUniversitaireControllers.updatedStatus);


module.exports = route;
