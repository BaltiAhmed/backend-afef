const httpError = require("../models/error");

const reclamation = require("../models/reclamation");
const utilisateur = require("../models/utilisateur");

const { validationResult } = require("express-validator");

const ajout = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const { objet, message, utilisateurId } = req.body;
  let existinguser;
  try {
    existinguser = await utilisateur.findById(utilisateurId);
  } catch {
    return next(new httpError("failed ", 500));
  }

  const createdReclamation = new reclamation({
    objet,
    message,
    utilisateur: utilisateurId,
    finish: false,
  });

  try {
    await createdReclamation.save();
    existinguser.reclamations.push(createdReclamation);
    existinguser.save();
    
  } catch (err) {
    const error = new httpError("failed add", 500);
    return next(error);
  }

  res.status(201).json({ reclamation: createdReclamation });
};

const getReclamation = async (req, res, next) => {
  let existingReclamaion;
  try {
    existingReclamaion = await reclamation.find();
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ rec: existingReclamaion });
};

const getReclamationByUserId = async (req, res, next) => {
  const id = req.params.id;
  let existingReclamaion;
  try {
    existingReclamaion = await utilisateur
      .findById(id)
      .populate("reclamations");
  } catch {
    const error = new httpError("failed !!", 500);
    return next(error);
  }

  if (!existingReclamaion || existingReclamaion.reclamations.length === 0) {
    return next(new httpError("Pas de reclamation.", 404));
  }

  res.json({
    reclamation: existingReclamaion.reclamations.map((rec) =>
      rec.toObject({ getters: true })
    ),
  });
};

const getReclamationById = async (req, res, next) => {
  const id = req.params.id;
  let existingReclamaion;
  try {
    existingReclamaion = await reclamation.findById(id);
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ rec: existingReclamaion });
};

const deleteReclamation = async (req, res, next) => {
  const id = req.params.id;
  let existingReclamaion;
  try {
    existingReclamaion = await reclamation.findById(id);
  } catch {
    return next(new httpError("failed!!", 500));
  }
  if (!existingReclamaion) {
    return next(new httpError("reclamation does not exist!!", 422));
  }
  try {
    existingReclamaion.remove();
  } catch {
    return next(new httpError("failed !!!", 500));
  }
  res.status(200).json({ message: "deleted" });
};

exports.ajout = ajout;
exports.getReclamation = getReclamation;
exports.getReclamationById = getReclamationById;
exports.getReclamationByUserId = getReclamationByUserId;
exports.deleteReclamation = deleteReclamation
