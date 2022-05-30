const httpError = require("../models/error");

const attestationNonAffiliation = require("../models/attestation-non-affiliation");
const utilisateur = require("../models/utilisateur");

const { validationResult } = require("express-validator");

const ajout = async (req, res, next) => {
  const {
    utilisateurId,
    centre,
    nom,
    CIN,
    dateCIN,
    DateNaissance,
    lieuNaissance,
  } = req.body;

  const createdattestationNonAffiliation = new attestationNonAffiliation({
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
    await createdattestationNonAffiliation.save();
    existingAllocation.attestationNonAffiliation.push(
      createdattestationNonAffiliation
    );
    existingAllocation.save();
  } catch (err) {
    const error = new httpError("failed signup", 500);
    return next(error);
  }

  res.status(201).json({ attestation: createdattestationNonAffiliation });
};

const getAttestationNonAffiliation = async (req, res, next) => {
  let existingAttestationNonAffiliation;
  try {
    existingAttestationNonAffiliation = await attestationNonAffiliation.find();
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ attestation: existingAttestationNonAffiliation });
};


const updatedStatus = async (req, res, next) => {
  const id = req.params.id;
  let existingElement;

  try {
    existingElement = await attestationNonAffiliation.findById(id);
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
exports.getAttestationNonAffiliation = getAttestationNonAffiliation
exports.updatedStatus = updatedStatus

