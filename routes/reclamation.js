const express = require("express");
const route = express.Router();

const reclamationControllers = require("../controllers/reclamation");

const { check } = require("express-validator");

route.post(
  "/ajout",
  check("objet").not().isEmpty(),
  check("message").not().isEmpty(),
  reclamationControllers.ajout
);

route.get("/", reclamationControllers.getReclamation);
route.get("/:id", reclamationControllers.getReclamationById);
route.get("/utilisateur/:id", reclamationControllers.getReclamationByUserId);
route.delete('/:id',reclamationControllers.deleteReclamation)

module.exports = route;
