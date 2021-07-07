
const httpError = require('../models/error');

const pretUniversitaire = require('../models/pretUniversitaire');
const utilisateur = require('../models/utilisateur')

const { validationResult } = require('express-validator');


const ajout = async (req, res, next) =>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return next
            (new httpError('invalid input passed ', 422));

    }

    const { demande, copieCINParent, copieCINEtudiant, attestationSalaire, declarationREV, certificatInscrit, rib, utilisateurId } = req.body;


    const createdPretUniv = new pretUniversitaire({

        demande,
        copieCINParent,
        copieCINEtudiant,
        attestationSalaire,
        declarationREV,
        rib,
        utilisateurId,
        finish:false

    });

    let existingPretUniv;
    try {

        existingPretUniv = await utilisateur.findById(utilisateurId)

    } catch (err) {
        const error = new httpError('problems!!!', 500);
        return next(error)
    }

    try {
        await createdPretUniv.save();
        existingPretUniv.pretUniversitaire.push(createdPretUniv)
        existingPretUniv.save()
    } catch (err) {
        const error = new httpError('failed signup', 500);
        return next(error);
    }

    res.status(201).json({ pretuniv: created.PretUniv });


}


const getPretUniv = async (req, res, next) => {
    let existingPretUniv;
    try {
        existingPretUniv = await pretUniversitaire.find()
    } catch {
        const error = new httpError('failed signup', 500);
        return next(error);
    }
    res.json({ pretuniv: existingPretUniv })
}


const getPretUnivById = async (req, res, next) => {
    const id= req.params.id
    let existingPretUniv;
    try {
        existingPretUniv = await pretUniversitaire.findById(id)
    } catch {
        const error = new httpError('failed signup', 500);
        return next(error);
    }
    res.json({ pretuniv: existingPretUniv })
}
const updatedemande = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { demande } = req.body;
    const id = req.params.id;
    let existingPretUniv;
  
    try {
        existingPretUniv = await pretUniversitaire.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPretUniv.demande = demande;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPretUniv: existingPretUniv });
  };
  const updatecopieCINParent = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { copieCINParent } = req.body;
    const id = req.params.id;
    let existingPretUniv;
  
    try {
        existingPretUniv = await pretUniversitaire.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPretUniv.copieCINParent = copieCINParent;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPretUniv: existingPretUniv });
  };
  const updatecopieCINEtudiant = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { copieCINEtudiant } = req.body;
    const id = req.params.id;
    let existingPretUniv;
  
    try {
        existingPretUniv = await pretUniversitaire.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPretUniv.copieCINEtudiant = copieCINEtudiant;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPretUniv: existingPretUniv });
  };
  const updateattestationSalaire = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { attestationSalaire } = req.body;
    const id = req.params.id;
    let existingPretUniv;
  
    try {
        existingPretUniv = await pretUniversitaire.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPretUniv.attestationSalaire = attestationSalaire;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPretUniv: existingPretUniv });
  };
  const updatedeclarationREV = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { declarationREV } = req.body;
    const id = req.params.id;
    let existingPretUniv;
  
    try {
        existingPretUniv = await pretUniversitaire.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPretUniv.declarationREV = declarationREV;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPretUniv: existingPretUniv });
  };
  const updaterib = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { rib } = req.body;
    const id = req.params.id;
    let existingPretUniv;
  
    try {
        existingPretUniv = await pretUniversitaire.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPretUniv.rib = rib;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPretUniv: existingPretUniv });
  };

exports.ajout=ajout
exports.getPretUniv=getPretUniv
exports.getPretUnivById=getPretUnivById
exports.updatedemande=updatedemande
exports.updatecopieCINParent=updatecopieCINParent
exports.updatecopieCINEtudiant=updatecopieCINEtudiant
exports.updateattestationSalaire=updateattestationSalaire
exports.updatedeclarationREV=updatedeclarationREV
exports.updaterib=updaterib