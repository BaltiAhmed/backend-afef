const express = require("express");
const route = express.Router();

const allocationVieillesseControllers = require("../controllers/allocationVieillesse");

const { check } = require("express-validator");
const fileUpload = require("../middleware/file-upload");

route.post(
  "/ajout",
  fileUpload.single("image"),
  allocationVieillesseControllers.ajout
);

route.patch(
  "/updateArreteMiseRetraite/:id",
  fileUpload.single("image"),
  allocationVieillesseControllers.updateArreteMiseRetraite
);

route.patch(
  "/updateReleveServices/:id",
  fileUpload.single("image"),
  allocationVieillesseControllers.updateReleveServices
);

route.patch(
  "/updateextraitNaissance/:id",
  fileUpload.single("image"),
  allocationVieillesseControllers.updateextraitNaissance
);

route.patch(
  "/updatephotoIdentite/:id",
  fileUpload.single("image"),
  allocationVieillesseControllers.updatephotoIdentite
);

route.get("/", allocationVieillesseControllers.getAllocation);
route.get("/:id", allocationVieillesseControllers.getAllocationById);
route.patch("/:id", allocationVieillesseControllers.updatedStatus);


module.exports = route;
