const httpError = require("../models/error");

const nonBenifisPret = require("../models/non-benifis-pret");
const utilisateur = require("../models/utilisateur");

const { validationResult } = require("express-validator");

const ajout = async (req, res, next) => {
  const {
    utilisateurId,
    matricule,
    centre,
    nom,
    CIN,
    dateCIN,
    DateNaissance,
    lieuNaissance,
  } = req.body;

  const creatednonBenifisPret = new nonBenifisPret({
    matricule,
    centre,
    nom,
    CIN,
    dateCIN,
    DateNaissance,
    lieuNaissance,
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
    await creatednonBenifisPret.save();
    existingAllocation.nonBenifisPret.push(creatednonBenifisPret);
    existingAllocation.save();
  } catch (err) {
    const error = new httpError("failed signup", 500);
    return next(error);
  }

  res.status(201).json({ attestation: creatednonBenifisPret });
};

const getnonBenifisPret = async (req, res, next) => {
  let existingnonBenifisPret;
  try {
    existingnonBenifisPret = await nonBenifisPret.find();
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ attestation: existingnonBenifisPret });
};

const updatedStatus = async (req, res, next) => {
  const id = req.params.id;
  let existingElement;

  try {
    existingElement = await nonBenifisPret.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingElement.finish = true;

  try {
    existingElement.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingElement: existingElement });
};

exports.ajout = ajout;
exports.getnonBenifisPret = getnonBenifisPret;
exports.updatedStatus = updatedStatus;
