const httpError = require("../models/error");

const utilisateur = require("../models/utilisateur");

const { validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const { nom, prenom, adresse, email, Dnaissance, tel, password } = req.body;
  let existinguser;
  try {
    existinguser = await utilisateur.findOne({ email: email });
  } catch (err) {
    const error = new httpError("problems!!!", 500);
    return next(error);
  }

  if (existinguser) {
    const error = new httpError("utiisateur exist", 422);
    return next(error);
  }

  const createduser = new utilisateur({
    nom,
    prenom,
    password,
    adresse,
    email,
    tel,
    Dnaissance,
    matriculeCNRPS: null,
    bloc: "false",
    allocationVieillesse: [],
    attestation: [],
    capitalDeces: [],
    pensionCivile: [],
    pensionConjoint: [],
    pensionOrphelin: [],
    pensionretraite: [],
    prestationsoutien: [],
    pretpersonnel: [],
    pretUniversitaire: [],
    reclamations: [],
    notification: [],
  });

  try {
    createduser.save();
  } catch (err) {
    const error = new httpError("failed signup", 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { adminId: createduser.id, matricule: createduser.matricule },
      "secret-thinks",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new httpError("failed signup try again later", 500);
    return next(error);
  }

  res.status(201).json({
    utilisateurId: createduser.id,
    email: createduser.email,
    token: token,
  });
};

const login = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("Vérifiez vos coordonnées ", 422));
  }

  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await utilisateur.findOne({ email: email });
  } catch {
    return next(new httpError("failed !!", 500));
  }

  if (!existingUser || existingUser.password !== password) {
    return next(new httpError("invalid input passed ", 422));
  }

  let token;
  try {
    token = jwt.sign(
      { adminId: existingUser.id, matricule: existingUser.matricule },
      "secret-thinks",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new httpError("failed signup try again later", 500);
    return next(error);
  }

  res.status(200).json({ utilisateur: existingUser, token: token });
};

const getUtilisateur = async (req, res, next) => {
  let existinguser;
  try {
    existinguser = await utilisateur.find();
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ utilisateur: existinguser });
};

const updateUtilisateur = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const { nom, prenom, adresse, email, Dnaissance, tel, password } = req.body;
  const UserId = req.params.UserId;
  let existinguser;

  try {
    existinguser = await utilisateur.findById(UserId);
  } catch {
    return next(new httpError("failed ", 500));
  }
  existinguser.nom = nom;
  existinguser.email = prenom;
  existinguser.adresse = adresse;
  existinguser.email = email;
  existinguser.Dnaissance = Dnaissance;
  existinguser.tel = tel;
  existinguser.password = password;

  existinguser.save();

  console.log(existinguser);
  try {
    existinguser.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ utilisateur: existinguser });
};

const BlocUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new httpError("invalid input passed ", 422));
  }

  const UserId = req.params.id;
  let existinguser;

  try {
    existinguser = await utilisateur.findById(UserId);
  } catch {
    return next(new httpError("failed ", 500));
  }

  existinguser.bloc == "false"
    ? (existinguser.bloc = "true")
    : (existinguser.bloc = "false");

  try {
    existinguser.save();
  } catch {
    return next(new httpError("failed to save ", 500));
  }

  res.status(200).json({ utilisateur: existinguser });
};

const deleteUtilisateur = async (req, res, next) => {
  const id = req.params.id;
  let existingUser;
  try {
    existingUser = await utilisateur.findById(id);
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

const getUtilisateurById = async (req, res, next) => {
  const id = req.params.id;

  let existinguser;
  try {
    existinguser = await utilisateur.findById(id);
  } catch {
    const error = new httpError("failed signup", 500);
    return next(error);
  }
  res.json({ utilisateur: existinguser });
};

exports.signup = signup;
exports.login = login;
exports.getUtilisateur = getUtilisateur;
exports.updateUtilisateur = updateUtilisateur;
exports.deleteUtilisateur = deleteUtilisateur;
exports.getUtilisateurById = getUtilisateurById;
exports.BlocUser = BlocUser;
