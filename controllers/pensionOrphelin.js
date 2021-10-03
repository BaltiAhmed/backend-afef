const httpError = require("../models/error");

const pensionOrphelin = require("../models/pensionOrphelin");
const utilisateur = require("../models/utilisateur");

const { validationResult } = require("express-validator");

const ajout = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const { utilisateurId } = req.body;

  const createdPensionO = new pensionOrphelin({
    demande: req.file.path,
    acteDeces: "fgfgfg",
    releveServices: "fgfgfg",
    extraitNaissOrphelin: "fgfgfg",
    cinOrphelin: "fgfgfg",
    declarationNonEmploi: "fgfgfg",
    certificatInscritUniversitaire: "fgfgfg",
    attestationNonAff: "fgfgfg",
    attestationNonBenif: "fgfgfg",
    carteHandicap: "fgfgfg",
    jugementTutelle: "fgfgfg",
    photoTuteur: "fgfgfg",
    copieCinTuteur: "fgfgfg",
    utilisateurId,
    finish: false,
  });

  let existingPensionO;
  try {
    existingPensionO = await utilisateur.findById(utilisateurId);
  } catch (err) {
    const error = new httpError("problems!!!", 500);
    return next(error);
  }

  try {
    await createdPensionO.save();
    existingPensionO.pensionOrphelin.push(createdPensionO);
    existingPensionO.save();
  } catch (err) {
    const error = new httpError("failed signup", 500);
    return next(error);
  }

  res.status(201).json({ PensionO: createdPensionO });
};

const getPensionO = async (req, res, next) => {
  let existingPensionO;
  try {
    existingPensionO = await pensionOrphelin.find();
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ PensionO: existingPensionO });
};

const getPensionOById = async (req, res, next) => {
  const id = req.params.id;
  let existingPensionO;
  try {
    existingPensionO = await pensionOrphelin.findById(id);
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ PensionO: existingPensionO });
};

const updateacteDeces = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPensionO;

  try {
    existingPensionO = await pensionOrphelin.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionO.acteDeces = req.file.path;

  try {
    existingPensionO.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionO: existingPensionO });
};
const updatereleveServices = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPensionO;

  try {
    existingPensionO = await pensionOrphelin.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionO.releveServices = req.file.path;

  try {
    existingPensionO.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionO: existingPensionO });
};
const updateextraitNaissOrphelin = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPensionO;

  try {
    existingPensionO = await pensionOrphelin.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionO.extraitNaissOrphelin = req.file.path;

  try {
    existingPensionO.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionO: existingPensionO });
};
const updatecinOrphelin = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPensionO;

  try {
    existingPensionO = await pensionOrphelin.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionO.cinOrphelin = req.file.path;

  try {
    existingPensionO.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionO: existingPensionO });
};
const updatedeclarationNonEmploi = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPensionO;

  try {
    existingPensionO = await pensionOrphelin.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionO.declarationNonEmploi = req.file.path;

  try {
    existingPensionO.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionO: existingPensionO });
};
const updatecertificatInscritUniversitaire = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPensionO;

  try {
    existingPensionO = await pensionOrphelin.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionO.certificatInscritUniversitaire = req.file.path;

  try {
    existingPensionO.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionO: existingPensionO });
};
const updateattestationNonAff = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPensionO;

  try {
    existingPensionO = await pensionOrphelin.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionO.attestationNonAff = req.file.path;

  try {
    existingPensionO.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionO: existingPensionO });
};
const updateattestationNonBenif = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPensionO;

  try {
    existingPensionO = await pensionOrphelin.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionO.attestationNonBenif = req.file.path;

  try {
    existingPensionO.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionO: existingPensionO });
};
const updatecarteHandicap = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPensionO;

  try {
    existingPensionO = await pensionOrphelin.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionO.carteHandicap = req.file.path;

  try {
    existingPensionO.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionO: existingPensionO });
};
const updatejugementTutelle = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPensionO;

  try {
    existingPensionO = await pensionOrphelin.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionO.jugementTutelle = req.file.path;

  try {
    existingPensionO.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionO: existingPensionO });
};
const updatephotoTuteur = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPensionO;

  try {
    existingPensionO = await pensionOrphelin.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionO.photoTuteur = req.file.path;

  try {
    existingPensionO.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionO: existingPensionO });
};
const updatecopieCinTuteur = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPensionO;

  try {
    existingPensionO = await pensionOrphelin.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionO.copieCinTuteur = req.file.path;

  try {
    existingPensionO.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionO: existingPensionO });
};

exports.ajout = ajout;
exports.getPensionO = getPensionO;
exports.getPensionOById = getPensionOById;

exports.updateacteDeces = updateacteDeces;
exports.updatereleveServices = updatereleveServices;
exports.updateextraitNaissOrphelin = updateextraitNaissOrphelin;
exports.updatecinOrphelin = updatecinOrphelin;
exports.updatedeclarationNonEmploi = updatedeclarationNonEmploi;
exports.updatecertificatInscritUniversitaire =
  updatecertificatInscritUniversitaire;
exports.updateattestationNonAff = updateattestationNonAff;
exports.updateattestationNonBenif = updateattestationNonBenif;
exports.updatecarteHandicap = updatecarteHandicap;
exports.updatejugementTutelle = updatejugementTutelle;
exports.updatephotoTuteur = updatephotoTuteur;
exports.updatecopieCinTuteur = updatecopieCinTuteur;
