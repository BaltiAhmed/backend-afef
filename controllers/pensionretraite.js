
const httpError = require('../models/error');

const pensionretraite = require('../models/pensionretraite');
const utilisateur = require('../models/utilisateur')

const { validationResult } = require('express-validator');


const ajout = async (req, res, next) =>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return next
            (new httpError('invalid input passed ', 422));

    }

    const { arreteMISEretraite, releveService, photoIdent, extraitNaissance, utilisateurId } = req.body;


    const createdAllocation = new allocationVieillesse({

        arreteMISEretraite,
        releveService,
        photoIdent,
        extraitNaissance,
        utilisateurId,
        finish:false

    });

    let existingPensionR;
    try {

        existingPensionR = await utilisateur.findById(utilisateurId)

    } catch (err) {
        const error = new httpError('problems!!!', 500);
        return next(error)
    }

    try {
        await createdPensionR.save();
        existingPensionR.pensionretraite.push(createdPensionR)
        existingPensionR.save()
    } catch (err) {
        const error = new httpError('failed signup', 500);
        return next(error);
    }

    res.status(201).json({ pensionR: createdPensionR  });


}


const getPensionR = async (req, res, next) => {
    let existingPensionR;
    try {
        existingPensionR = await pensionretraite.find()
    } catch {
        const error = new httpError('failed signup', 500);
        return next(error);
    }
    res.json({ pensionR: existingPensionR })
}


const getPensionRById = async (req, res, next) => {
    const id= req.params.id
    let existingPensionR;
    try {
        existingPensionR = await pensionretraite.findById(id)
    } catch {
        const error = new httpError('failed signup', 500);
        return next(error);
    }
    res.json({ pensionR: existingPensionR })
}
const updatearreteMISEretraite = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { arreteMISEretraite } = req.body;
    const id = req.params.id;
    let existingPensionR;
  
    try {
        existingPensionR = await pensionretraite.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionR.arreteMISEretraite = arreteMISEretraite;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPensionR: existingPensionR });
  };
  const updatereleveService = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { releveService } = req.body;
    const id = req.params.id;
    let existingPensionR;
  
    try {
        existingPensionR = await pensionretraite.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionR.releveService = releveService;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPensionR: existingPensionR });
  };
  const updatephotoIdent = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { photoIdent } = req.body;
    const id = req.params.id;
    let existingPensionR;
  
    try {
        existingPensionR = await pensionretraite.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionR.photoIdent = photoIdent;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPensionR: existingPensionR });
  };
  const updateextraitNaissance = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { extraitNaissance } = req.body;
    const id = req.params.id;
    let existingPensionR;
  
    try {
        existingPensionR = await pensionretraite.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionR.extraitNaissance = extraitNaissance;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPensionR: existingPensionR });
  };

exports.ajout=ajout
exports.getPensionR=getPensionR
exports.getPensionRById=getPensionRById
exports.updatearreteMISEretraite=updatearreteMISEretraite
exports.updatereleveService=updatereleveService
exports.updatephotoIdent=updatephotoIdent
exports.updateextraitNaissance=updateextraitNaissance