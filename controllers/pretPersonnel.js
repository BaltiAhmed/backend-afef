const httpError = require("../models/error");

const pretPersonnel = require("../models/pretPersonnel");
const utilisateur = require("../models/utilisateur");

const { validationResult } = require("express-validator");

const ajout = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const { utilisateurId } = req.body;

  const createdPretPers = new pretPersonnel({
    demandepret: req.file.path,
    copieCIN: "jjj",
    rib: "jjbj",
    utilisateurId,
    finish: false,
  });

  let existingPretPers;
  try {
    existingPretPers = await utilisateur.findById(utilisateurId);
  } catch (err) {
    const error = new httpError("problems!!!", 500);
    return next(error);
  }

  try {
    createdPretPers.save();
    existingPretPers.pretpersonnel.push(createdPretPers);
    existingPretPers.save();
  } catch (err) {
    const error = new httpError("failed signup", 500);
    return next(error);
  }

  res.status(201).json({pretP: createdPretPers });
};

const getPretPers = async (req, res, next) => {
  let existingPretPers;
  try {
    existingPretPers = await pretPersonnel.find();
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ pretpers: existingPretPers });
};

const getPretPersById = async (req, res, next) => {
  const id = req.params.id;
  let existingPretPers;
  try {
    existingPretPers = await pretPersonnel.findById(id);
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ pretpers: existingPretPers });
};

const updatecopieCIN = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }
  const id = req.params.id;
  let existingPretPers;

  try {
    existingPretPers = await pretPersonnel.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPretPers.copieCIN = req.file.path;

  try {
    existingPretPers.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPretPers: existingPretPers });
};
const updaterib = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPretPers;

  try {
    existingPretPers = await pretPersonnel.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPretPers.rib = req.file.path;

  try {
    existingPretPers.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPretPers: existingPretPers });
};

exports.ajout = ajout;
exports.getPretPers = getPretPers;
exports.getPretPersById = getPretPersById;
exports.updatecopieCIN = updatecopieCIN;
exports.updaterib = updaterib;
