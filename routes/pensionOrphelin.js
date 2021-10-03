const express = require("express");
const route = express.Router();

const pensionOrphelinControllers = require("../controllers/pensionOrphelin");

const { check } = require("express-validator");
const fileUpload = require("../middleware/file-upload");

route.post(
  "/ajout",
  fileUpload.single("image"),
  pensionOrphelinControllers.ajout
);

route.patch(
  "/updateacteDeces/:id",
  fileUpload.single("image"),
  pensionOrphelinControllers.updateacteDeces
);

route.patch(
  "/updatereleveServices/:id",
  fileUpload.single("image"),
  pensionOrphelinControllers.updatereleveServices
);
route.patch(
  "/updateextraitNaissOrphelin/:id",
  fileUpload.single("image"),
  pensionOrphelinControllers.updateextraitNaissOrphelin
);
route.patch(
  "/updatecinOrphelin/:id",
  fileUpload.single("image"),
  pensionOrphelinControllers.updatecinOrphelin
);

route.patch(
  "/updatedeclarationNonEmploi/:id",
  fileUpload.single("image"),
  pensionOrphelinControllers.updatedeclarationNonEmploi
);

route.patch(
  "/updatecertificatInscritUniversitaire/:id",
  fileUpload.single("image"),
  pensionOrphelinControllers.updatecertificatInscritUniversitaire
);

route.patch(
  "/updateattestationNonAff/:id",
  fileUpload.single("image"),
  pensionOrphelinControllers.updateattestationNonAff
);

route.patch(
  "/updateattestationNonBenif/:id",
  fileUpload.single("image"),
  pensionOrphelinControllers.updateattestationNonBenif
);

route.patch(
  "/updatecarteHandicap/:id",
  fileUpload.single("image"),
  pensionOrphelinControllers.updatecarteHandicap
);

route.patch(
  "/updatejugementTutelle/:id",
  fileUpload.single("image"),
  pensionOrphelinControllers.updatejugementTutelle
);

route.patch(
  "/updatephotoTuteur/:id",
  fileUpload.single("image"),
  pensionOrphelinControllers.updatephotoTuteur
);

route.patch(
  "/updatecopieCinTuteur/:id",
  fileUpload.single("image"),
  pensionOrphelinControllers.updatecopieCinTuteur
);

route.get("/", pensionOrphelinControllers.getPensionO);
route.get("/:id", pensionOrphelinControllers.getPensionOById);

module.exports = route;
