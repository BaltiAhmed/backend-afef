const express = require("express");
const route = express.Router();

const prestationSoutienControllers = require("../controllers/prestationSoutien");

const { check } = require("express-validator");

const fileUpload = require("../middleware/file-upload");

route.post(
  "/ajout",
  fileUpload.single("image"),

  prestationSoutienControllers.ajout
);

route.patch(
  "/updateattestaionSalAffilie/:id",
  fileUpload.single("image"),
  prestationSoutienControllers.updateattestaionSalAffilie
);

route.patch(
  "/updateattestaionSalConjoint/:id",
  fileUpload.single("image"),
  prestationSoutienControllers.updateattestaionSalConjoint
);

route.patch(
  "/updateextraitNaissanceEnfant/:id",
  fileUpload.single("image"),
  prestationSoutienControllers.updateextraitNaissanceEnfant
);

route.patch(
  "/updatecopieDecisionMutation/:id",
  fileUpload.single("image"),
  prestationSoutienControllers.updatecopieDecisionMutation
);

route.patch(
  "/updatecopieContratLocation/:id",
  fileUpload.single("image"),
  prestationSoutienControllers.updatecopieContratLocation
);

route.patch(
  "/updatecopieCINaffilie/:id",
  fileUpload.single("image"),
  prestationSoutienControllers.updatecopieCINaffilie
);

route.patch(
  "/updatecopieCINconjoint/:id",
  fileUpload.single("image"),
  prestationSoutienControllers.updatecopieCINconjoint
);

route.get("/", prestationSoutienControllers.getPrestationSou);
route.get("/:id", prestationSoutienControllers.getPrestationSouById);

module.exports = route;
