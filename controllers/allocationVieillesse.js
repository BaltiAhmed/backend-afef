const httpError = require("../models/error");

const allocationVieillesse = require("../models/allocationVieillesse");
const utilisateur = require("../models/utilisateur");

const { validationResult } = require("express-validator");

const ajout = async (req, res, next) => {
  const { utilisateurId } = req.body;

  const createdAllocation = new allocationVieillesse({
    demandeAllocation: req.file.path,
    arreteMiseRetraite: "hhh",
    releveServices: "hgjj",
    photoIdentite: "hjghj",
    extraitNaissance: "hjgh",
    utilisateurId,
    finish: false,
  });

  let existingAllocation;
  try {
    existingAllocation = await utilisateur.findById(utilisateurId);
  } catch (err) {
    const error = new httpError("problems!!!", 500);
    return next(error);
  }

  try {
    await createdAllocation.save();
    existingAllocation.allocationVieillesse.push(createdAllocation);
    existingAllocation.save();
  } catch (err) {
    const error = new httpError("failed signup", 500);
    return next(error);
  }

  res.status(201).json({ allocation: createdAllocation });
};

const getAllocation = async (req, res, next) => {
  let existingAllocation;
  try {
    existingAllocation = await allocationVieillesse.find();
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ allocation: existingAllocation });
};

const getAllocationById = async (req, res, next) => {
  const id = req.params.id;
  let existingAllocation;
  try {
    existingAllocation = await allocationVieillesse.findById(id);
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ allocation: existingAllocation });
};

const updateArreteMiseRetraite = async (req, res, next) => {


  const id = req.params.id;
  let existingAllocation;

  try {
    existingAllocation = await allocationVieillesse.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingAllocation.arreteMiseRetraite = req.file.path;

  try {
    existingAllocation.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }
  console.log(existingAllocation);

  res.status(200).json({ existingAllocation: existingAllocation });
};

const updateReleveServices = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingAllocation;

  try {
    existingAllocation = await allocationVieillesse.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingAllocation.releveServices = req.file.path;

  try {
    existingAllocation.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }
  console.log(existingAllocation);

  res.status(200).json({ existingAllocation: existingAllocation });
};
const updatephotoIdentite = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingAllocation;

  try {
    existingAllocation = await allocationVieillesse.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingAllocation.photoIdentite = req.file.path;

  try {
    existingAllocation.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }
  

  res.status(200).json({ existingAllocation: existingAllocation });
};
const updateextraitNaissance = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingAllocation;

  try {
    existingAllocation = await allocationVieillesse.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingAllocation.extraitNaissance = req.file.path;

  try {
    existingAllocation.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingAllocation: existingAllocation });
};

const updatedStatus = async (req, res, next) => {
  const id = req.params.id;
  let element;

  try {
    element = await allocationVieillesse.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  element.finish = true;

  try {
    element.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ element: element });
};


exports.ajout = ajout;
exports.getAllocation = getAllocation;
exports.getAllocationById = getAllocationById;
exports.updateArreteMiseRetraite = updateArreteMiseRetraite;
exports.updateReleveServices = updateReleveServices;
exports.updatephotoIdentite = updatephotoIdentite;
exports.updateextraitNaissance = updateextraitNaissance;
exports.updatedStatus = updatedStatus

