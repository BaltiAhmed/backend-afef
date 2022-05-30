const express = require("express");
const route = express.Router();

const nonBenifisPret = require("../controllers/non-benifis-pret");

const { check } = require("express-validator");

route.post(
  "/ajout",
  check("matricule").not().isEmpty(),
  check("centre").not().isEmpty(),
  check("nom").not().isEmpty(),
  check("CIN").not().isEmpty(),
  check("dateCIN").not().isEmpty(),
  check("DateNaissance").not().isEmpty(),
  check("lieuNaissance").not().isEmpty(),
  nonBenifisPret.ajout
);

route.get("/", nonBenifisPret.getnonBenifisPret);

route.patch("/:id", nonBenifisPret.updatedStatus);



module.exports = route;
