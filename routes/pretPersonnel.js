const express = require("express");
const route = express.Router();

const pretPersonnelControllers = require("../controllers/pretPersonnel");

const { check } = require("express-validator");
const fileUpload = require("../middleware/file-upload");

route.post(
  "/ajout",
  fileUpload.single("image"),

  pretPersonnelControllers.ajout
);

route.patch(
  "/updaterib/:id",
  fileUpload.single("image"),
  pretPersonnelControllers.updaterib
);

route.patch(
  "/updatecopieCIN/:id",
  fileUpload.single("image"),
  pretPersonnelControllers.updatecopieCIN
);

route.get("/", pretPersonnelControllers.getPretPers);
route.get("/:id", pretPersonnelControllers.getPretPersById);
route.patch("/:id", pretPersonnelControllers.updatedStatus);


module.exports = route;
