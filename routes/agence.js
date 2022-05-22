const express = require("express");
const route = express.Router();

const agenceControllers = require("../controllers/agence");

const { check } = require("express-validator");

route.post(
  "/ajout",
  check("nom").not().isEmpty(),
  check("adresse").not().isEmpty(),
  check("tel").not().isEmpty(),
  check("fax").not().isEmpty(),
  check("long").not().isEmpty(),
  check("lat").not().isEmpty(),

  agenceControllers.ajout
);

route.patch(
  "/:id",
  check("nom").not().isEmpty(),
  check("adresse").not().isEmpty(),
  check("tel").not().isEmpty(),
  check("fax").not().isEmpty(),
  check("long").not().isEmpty(),
  check("lat").not().isEmpty(),

  agenceControllers.updateAgence
);

route.get("/", agenceControllers.getAgence);
route.get("/:id", agenceControllers.getAgenceById);
route.delete("/:id", agenceControllers.deleteAgence);

module.exports = route
