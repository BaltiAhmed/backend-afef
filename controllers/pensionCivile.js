const httpError = require("../models/error");

const pensionCivile = require("../models/pensionCivile");
const utilisateur = require("../models/utilisateur");

const { validationResult } = require("express-validator");

const ajout = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const { utilisateurId } = req.body;

  const createdPensionC = new pensionCivile({
    decisionMISEretraite: req.file.path,
    releveService: "gghh",
    utilisateurId,
    finish: false,
  });

  let existinguser;
  try {
    existinguser = await utilisateur.findById(utilisateurId);
  } catch (err) {
    const error = new httpError("problems!!!", 500);
    return next(error);
  }

  try {
    await createdPensionC.save();
    existinguser.pensionCivile.push(createdPensionC);
    await existinguser.save();
  } catch (err) {
    const error = new httpError("failed signup", 500);
    return next(error);
  }

  res.status(200).json({ PensionC: createdPensionC });
};

const getPensionC = async (req, res, next) => {
  let existingPensionC;
  try {
    existingPensionC = await pensionCivile.find();
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ PensionC: existingPensionC });
};

const getPensionCById = async (req, res, next) => {
  const id = req.params.id;
  let existingPensionC;
  try {
    existingPensionC = await pensionCivile.findById(id);
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ PensionC: existingPensionC });
};

const updatedecisionMISEretraite = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const { decisionMISEretraite } = req.body;
  const id = req.params.id;
  let existingPensionC;

  try {
    existingPensionC = await pensionCivile.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionC.decisionMISEretraite = decisionMISEretraite;

  try {
    existinguser.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionC: existingPensionC });
};
const uploadReleveService = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const id = req.params.id;
  let existingPensionC;

  try {
    existingPensionC = await pensionCivile.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionC.releveService = req.file.path;

  try {
    existingPensionC.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  console.log(existingPensionC);

  res.status(200).json({ existingPensionC: existingPensionC });
};

const updatedStatus = async (req, res, next) => {
  const id = req.params.id;
  let existingPensionC;

  try {
    existingPensionC = await pensionCivile.findById(id);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existingPensionC.finish = true;

  try {
    existingPensionC.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ existingPensionC: existingPensionC });
};

exports.ajout = ajout;
exports.getPensionC = getPensionC;
exports.getPensionCById = getPensionCById;
exports.updatedecisionMISEretraite = updatedecisionMISEretraite;
exports.uploadReleveService = uploadReleveService;
exports.updatedStatus = updatedStatus
