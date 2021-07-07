const express = require("express");
const route = express.Router();
const pensionCivileControllers = require("../controllers/pensionCivile");
const fileUpload = require("../middleware/file-upload");
const { check } = require("express-validator");

route.post(
  "/ajout",
  fileUpload.single("image1"),
  pensionCivileControllers.ajout
);

route.patch(
  "/uploadReleveService/:id",
  fileUpload.single("image"),
  pensionCivileControllers.uploadReleveService
);

route.get("/", pensionCivileControllers.getPensionC);
route.get("/:id", pensionCivileControllers.getPensionCById);

module.exports = route;
