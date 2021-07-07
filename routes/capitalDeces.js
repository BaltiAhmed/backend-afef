const express = require("express");
const route = express.Router();

const capitalDecesControllers = require("../controllers/capitalDeces");

const { check } = require("express-validator");

const fileUpload = require("../middleware/file-upload");

route.post("/ajout", fileUpload.single("image"), capitalDecesControllers.ajout);

route.patch("/updateacteDeces/:id", fileUpload.single("image"), capitalDecesControllers.updateacteDeces);
route.patch("/updatecinConjoint/:id", fileUpload.single("image"), capitalDecesControllers.updatecinConjoint);
route.patch("/updateextraitNaissConjoint/:id", fileUpload.single("image"), capitalDecesControllers.updateextraitNaissConjoint);

route.get("/", capitalDecesControllers.getCapital);
route.get("/:id", capitalDecesControllers.getCapitalById);

module.exports = route;
