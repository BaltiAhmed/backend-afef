const express = require("express");
const route = express.Router();

const notificationControllers = require("../controllers/notification");

const { check } = require("express-validator");

route.post(
  "/ajout",
  check("sujet").not().isEmpty(),
  check("message").not().isEmpty(),
  check("idUtilisateur").not().isEmpty(),

  notificationControllers.ajout
);

route.get("/:id", notificationControllers.getNotificationByUserId);

module.exports = route;
