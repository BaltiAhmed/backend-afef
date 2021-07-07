const httpError = require("../models/error");

const pensionConjoint = require("../models/pensionConjoint");
const utilisateur = require("../models/utilisateur");

const { validationResult } = require("express-validator");

const ajout = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const { utilisateurId } = req.body;

  const createdPensionCon = new pensionConjoint({
    acteNotorieteDeces: "fgfgfg",
    extraitNaissConjoint: "ghghg",
    ficheRenseignemnt: req.file.path,
    photoIdentite: "hghgh",
    utilisateurId,
    finish: false,
  });

  let existingPensionCon;
  try {
    existingPensionCon = await utilisateur.findById(utilisateurId);
  } catch (err) {
    const error = new httpError("problems!!!", 500);
    return next(error);
  }

  try {
    await createdPensionCon.save();
    existingPensionCon.pensionConjoint.push(createdPensionCon);
    existingPensionCon.save();
  } catch (err) {
    const error = new httpError("failed signup", 500);
    return next(error);
  }

  res.status(201).json({ PensionCon: createdPensionCon });
};

const getPensionCon = async (req, res, next) => {
  let existingPensionCon;
  try {
    existingPensionCon = await pensionConjoint.find();
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ PensionCon: existingPensionCon });
};

const getPensionConById = async (req, res, next) => {
  const id = req.params.id;
  let existingPensionCon;
  try {
    existingPensionCon = await pensionConjoint.findById(id);
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ PensionCon: existingPensionCon });
};
const updateacteNotorieteDeces = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPensionCon;

  try {
    existingPensionCon = await pensionConjoint.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionCon.acteNotorieteDeces = req.file.path;

  try {
    existingPensionCon.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionCon: existingPensionCon });
};
const updateextraitNaissConjoint = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPensionCon;

  try {
    existingPensionCon = await pensionConjoint.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionCon.extraitNaissConjoint = req.file.path;

  try {
    existingPensionCon.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionCon: existingPensionCon });
};

const updatephotoIdentite = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPensionCon;

  try {
    existingPensionCon = await pensionConjoint.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionCon.photoIdentite = req.file.path;

  try {
    existingPensionCon.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionCon: existingPensionCon });
};

const deletePensionConjoin = async (req, res, next) => {
  const id = req.params.id;
  let existingUser;
  try {
    existingUser = await pensionConjoint.findById(id);
  } catch {
    return next(new httpError("failed!!", 500));
  }
  if (!existingUser) {
    return next(new httpError("user does not exist!!", 422));
  }
  try {
    existingUser.remove();
  } catch {
    return next(new httpError("failed !!!", 500));
  }
  res.status(200).json({ message: "deleted" });
};

exports.ajout = ajout;
exports.getPensionCon = getPensionCon;
exports.getPensionConById = getPensionConById;
exports.updateacteNotorieteDeces = updateacteNotorieteDeces;
exports.updateextraitNaissConjoint = updateextraitNaissConjoint;
exports.updatephotoIdentite = updatephotoIdentite;
exports.deletePensionConjoin = deletePensionConjoin
