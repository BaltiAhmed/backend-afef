const httpError = require("../models/error");

const agence = require("../models/agence");

const { validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");

const ajout = async (req, res, next) => {
  
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const { nom, adresse, tel, fax, long, lat } = req.body;
  let existingAgence;
  try {
    existingAgence = await agence.findOne({ tel: tel });
  } catch (err) {
    const error = new httpError("problems!!!", 500);
    return next(error);
  }

  if (existingAgence) {
    const error = new httpError("agencz existe déja", 422);
    return next(error);
  }

  const createdAgence = new agence({
    nom,
    adresse,
    tel,
    fax,
    long,
    lat,
  });

  try {
    await createdAgence.save();
  } catch (err) {
    const error = new httpError("failed signup", 500);
    return next(error);
  }

  res.status(201).json({
    agence: createdAgence,
  });
};

const updateAgence = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const { nom, adresse, tel, fax, long, lat } = req.body;
  const id = req.params.id;
  let existingAgence;

  try {
    existingAgence = await agence.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }
  existingAgence.nom = nom;
  existingAgence.adresse = adresse;
  existingAgence.tel = tel;
  existingAgence.fax = fax;
  existingAgence.long = long;
  existingAgence.lat = lat;

  try {
    existingAgence.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ agence: existingAgence });
};

const getAgence = async (req, res, next) => {
  let existingAgence;
  try {
    existingAgence = await agence.find();
  } catch {
    const error = new httpError("failed", 500);
    return next(error);
  }
  res.json({ agences: existingAgence });
};

const getAgenceById = async (req, res, next) => {
  const id = req.params.id;

  let existingAgence;
  try {
    existingAgence = await agence.findById(id);
  } catch {
    const error = new httpError("failed", 500);
    return next(error);
  }
  res.json({ agence: existingAgence });
};

const deleteAgence = async (req, res, next) => {
  const id = req.params.id;
  let existingAgence;
  try {
    existingAgence = await agence.findById(id);
  } catch {
    return next(new httpError("failed!!", 500));
  }
  if (!existingAgence) {
    return next(new httpError("agence does not exist!!", 422));
  }
  try {
    existingAgence.remove();
  } catch {
    return next(new httpError("failed !!!", 500));
  }
  res.status(200).json({ message: "deleted" });
};

exports.ajout = ajout;
exports.updateAgence = updateAgence;
exports.getAgence = getAgence;
exports.getAgenceById = getAgenceById;
exports.deleteAgence = deleteAgence;
