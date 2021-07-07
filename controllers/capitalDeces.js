const httpError = require("../models/error");

const capitalDeces = require("../models/capitalDeces");
const utilisateur = require("../models/utilisateur");

const { validationResult } = require("express-validator");

const ajout = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const { utilisateurId } = req.body;

  const createdCapital = new capitalDeces({
    ficheRenseignement: req.file.path,
    acteDeces: "dd",
    extraitNaissConjoint: "dd",
    cinConjoint: "dd",
    utilisateurId,
    finish: false,
  });

  let existingCapital;
  try {
    existingCapital = await utilisateur.findById(utilisateurId);
  } catch (err) {
    const error = new httpError("problems!!!", 500);
    return next(error);
  }

  try {
    await createdCapital.save();
    existingCapital.capitalDeces.push(createdCapital);
    existingCapital.save();
  } catch (err) {
    const error = new httpError("failed signup", 500);
    return next(error);
  }

  res.status(201).json({ Capital: createdCapital });
};

const getCapital = async (req, res, next) => {
  let existingCapital;
  try {
    existingCapital = await capitalDeces.find();
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ capitalDeces: existingCapital });
};

const getCapitalById = async (req, res, next) => {
  const id = req.params.id;
  let existingCapital;
  try {
    existingCapital = await capitalDeces.findById(id);
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ capitalDeces: existingCapital });
};

const updateacteDeces = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingCapital;

  try {
    existingCapital = await capitalDeces.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingCapital.acteDeces = req.file.path;

  try {
    existingCapital.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingCapital: existingCapital });
};
const updateextraitNaissConjoint = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingCapital;

  try {
    existingCapital = await capitalDeces.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingCapital.extraitNaissConjoint = req.file.path;

  try {
    existingCapital.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingCapital: existingCapital });
};
const updatecinConjoint = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingCapital;

  try {
    existingCapital = await capitalDeces.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingCapital.cinConjoint = req.file.path;

  try {
    existingCapital.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingCapital: existingCapital });
};

exports.ajout = ajout;
exports.getCapital = getCapital;
exports.getCapitalById = getCapitalById;
exports.updateacteDeces = updateacteDeces;
exports.updateextraitNaissConjoint = updateextraitNaissConjoint;
exports.updatecinConjoint = updatecinConjoint;
