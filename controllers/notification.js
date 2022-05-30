const httpError = require("../models/error");

const notification = require("../models/notification");
const utilisateur = require("../models/utilisateur");
const reclamation = require("../models/reclamation");

const { validationResult } = require("express-validator");

const ajout = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const { sujet, message, idUtilisateur, reclamationId } = req.body;
  let existinguser;
  try {
    existinguser = await utilisateur.findById(idUtilisateur);
  } catch (err) {
    const error = new httpError("problems!!!", 500);
    return next(error);
  }

  let existingReclamation;
  try {
    existingReclamation = await reclamation.findById(reclamationId);
  } catch (err) {
    const error = new httpError("problems!!!", 500);
    return next(error);
  }

  existingReclamation.finish = true

  
  const createdNotification = new notification({
    sujet,
    message,
    idUtilisateur,
  });

  try {
    await createdNotification.save();
    existinguser.push(createdNotification);
    await existinguser.save();
    await existingReclamation.save()
  } catch (err) {
    const error = new httpError("failed signup", 500);
    return next(error);
  }

  res.status(201).json({
    notification: createdNotification,
  });
};

const AddNotification = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const { sujet, message, idUtilisateur } = req.body;
  let existinguser;
  try {
    existinguser = await utilisateur.findById(idUtilisateur);
  } catch (err) {
    const error = new httpError("problems!!!", 500);
    return next(error);
  }

  const createdNotification = new notification({
    sujet,
    message,
    idUtilisateur,
  });

  try {
    await createdNotification.save();
    existinguser.push(createdNotification);
    await existinguser.save();
  } catch (err) {
    const error = new httpError("failed signup", 500);
    return next(error);
  }

  res.status(201).json({
    notification: createdNotification,
  });
}

const getNotificationByUserId = async (req, res, next) => {
  const id = req.params.id;
  let existingNotification;
  try {
    existingNotification = await utilisateur
      .findById(id)
      .populate("notification");
  } catch {
    const error = new httpError("failed !!", 500);
    return next(error);
  }

  if (!existingNotification || existingNotification.notification.length === 0) {
    return next(new httpError("Pas de reclamation.", 404));
  }

  res.json({
    notifications: existingNotification.notification.map((rec) =>
      rec.toObject({ getters: true })
    ),
  });
};

exports.ajout = ajout
exports.getNotificationByUserId = getNotificationByUserId
exports.AddNotification = AddNotification
