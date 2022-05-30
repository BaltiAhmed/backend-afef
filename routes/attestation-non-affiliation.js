const express = require("express");
const route = express.Router();

const attestationNonAffiliationcontrollers = require("../controllers/attestation-non-affiliation");

const { check } = require("express-validator");

route.post(
  "/ajout",
  check("centre").not().isEmpty(),
  check("nom").not().isEmpty(),
  check("CIN").not().isEmpty(),
  check("dateCIN").not().isEmpty(),
  check("DateNaissance").not().isEmpty(),
  check("lieuNaissance").not().isEmpty(),
  attestationNonAffiliationcontrollers.ajout
);

route.get("/", attestationNonAffiliationcontrollers.getAttestationNonAffiliation);

route.patch("/:id", attestationNonAffiliationcontrollers.updatedStatus);


module.exports = route;
