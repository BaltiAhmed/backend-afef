const express = require("express");
const route = express.Router();

const attestationAffiliation = require("../controllers/attestation-affiliation");

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
  attestationAffiliation.ajout
);

module.exports = route;
