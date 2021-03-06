const httpError = require("../models/error");

const attestationAffiliation = require("../models/attestation-affiliation");
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

  const createdattestationAffiliation = new attestationAffiliation({
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
    await createdattestationAffiliation.save();
    existingAllocation.attestationAffiliation.push(
      createdattestationAffiliation
    );
    existingAllocation.save();
  } catch (err) {
    const error = new httpError("failed signup", 500);
    return next(error);
  }

  res.status(201).json({ attestation: createdattestationAffiliation });
};

const getattestationAffiliation = async (req, res, next) => {
  let existingattestationAffiliation;
  try {
    existingattestationAffiliation = await attestationAffiliation.find();
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ attestation: existingattestationAffiliation });
};

const updatedStatus = async (req, res, next) => {
  const id = req.params.id;
  let existingElement;

  try {
    existingElement = await attestationAffiliation.findById(id);
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


exports.ajout =ajout
exports.getattestationAffiliation = getattestationAffiliation
exports.updatedStatus = updatedStatus
