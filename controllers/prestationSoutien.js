const httpError = require("../models/error");

const prestationSoutien = require("../models/prestationSoutien");
const utilisateur = require("../models/utilisateur");

const { validationResult } = require("express-validator");

const ajout = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const { utilisateurId } = req.body;

  const createdPrestationSou = new prestationSoutien({
    demandeLocation: req.file.path,
    attestaionSalAffilie: "hbnbnbn",
    attestaionSalConjoint: "hghghvghvg",
    extraitNaissanceEnfant: "jhjhjhj",
    copieDecisionMutation: "jbhjghjhjghj",
    copieContratLocation: "jjjhhjghjghj",
    copieCINaffilie: "jkhjhjhjhjk",
    copieCINconjoint: "jkhjkhjhjhjhj",
    utilisateurId,
    finish: false,
  });

  let existingPrestationSou;
  try {
    existingPrestationSou = await utilisateur.findById(utilisateurId);
  } catch (err) {
    const error = new httpError("problems!!!", 500);
    return next(error);
  }

  existingPrestationSou.prestationsoutien.push(createdPrestationSou);
  existingPrestationSou.save();

  try {
    createdPrestationSou.save();
  } catch (err) {
    const error = new httpError("failed signup", 500);
    return next(error);
  }

  res.status(201).json({ prestationsou: createdPrestationSou });
};

const getPrestationSou = async (req, res, next) => {
  let existingPrestationSou;
  try {
    existingPrestationSou = await prestationSoutien.find();
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ prestationsou: existingPrestationSou });
};

const getPrestationSouById = async (req, res, next) => {
  const id = req.params.id;
  let existingPrestationSou;
  try {
    existingPrestationSou = await prestationSoutien.findById(id);
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ prestationsou: existingPrestationSou });
};

const updateattestaionSalAffilie = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPrestationSou;

  try {
    existingPrestationSou = await prestationSoutien.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPrestationSou.attestaionSalAffilie = req.file.path;

  try {
    existingPrestationSou.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPrestationSou: existingPrestationSou });
};
const updateattestaionSalConjoint = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPrestationSou;

  try {
    existingPrestationSou = await prestationSoutien.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPrestationSou.attestaionSalConjoint = req.file.path;

  try {
    existingPrestationSou.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPrestationSou: existingPrestationSou });
};
const updateextraitNaissanceEnfant = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPrestationSou;

  try {
    existingPrestationSou = await prestationSoutien.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPrestationSou.extraitNaissanceEnfant = req.file.path;

  try {
    existingPrestationSou.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPrestationSou: existingPrestationSou });
};
const updatecopieDecisionMutation = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPrestationSou;

  try {
    existingPrestationSou = await prestationSoutien.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPrestationSou.copieDecisionMutation = req.file.path;

  try {
    existingPrestationSou.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPrestationSou: existingPrestationSou });
};
const updatecopieContratLocation = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPrestationSou;

  try {
    existingPrestationSou = await prestationSoutien.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPrestationSou.copieContratLocation = req.file.path;

  try {
    existingPrestationSou.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPrestationSou: existingPrestationSou });
};
const updatecopieCINaffilie = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPrestationSou;

  try {
    existingPrestationSou = await prestationSoutien.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPrestationSou.copieCINaffilie = req.file.path;

  try {
    existingPrestationSou.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPrestationSou: existingPrestationSou });
};
const updatecopieCINconjoint = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPrestationSou;

  try {
    existingPrestationSou = await prestationSoutien.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPrestationSou.copieCINconjoint = req.file.path;

  try {
    existingPrestationSou.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPrestationSou: existingPrestationSou });
};

exports.ajout = ajout;
exports.getPrestationSou = getPrestationSou;
exports.getPrestationSouById = getPrestationSouById;
exports.updateattestaionSalAffilie = updateattestaionSalAffilie;
exports.updateattestaionSalConjoint = updateattestaionSalConjoint;
exports.updateextraitNaissanceEnfant = updateextraitNaissanceEnfant;
exports.updatecopieDecisionMutation = updatecopieDecisionMutation;
exports.updatecopieContratLocation = updatecopieContratLocation;
exports.updatecopieCINaffilie = updatecopieCINaffilie;
exports.updatecopieCINconjoint = updatecopieCINconjoint;
