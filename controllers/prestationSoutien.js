
const httpError = require('../models/error');

const prestationSoutien = require('../models/prestationSoutien');
const utilisateur = require('../models/utilisateur')

const { validationResult } = require('express-validator');


const ajout = async (req, res, next) =>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return next
            (new httpError('invalid input passed ', 422));

    }

    const { demandeLocation, attestaionSalAffilie, attestaionSalConjoint, extraitNaissanceEnfant, copieDecisionMutation, copieContratLocation, copieCINaffilie, copieCINconjoint, utilisateurId } = req.body;


    const createdPrestationSou = new prestationSoutien({

        demandeLocation,
        attestaionSalAffilie,
        attestaionSalConjoint,
        extraitNaissanceEnfant,
        copieDecisionMutation,
        copieContratLocation,
        copieCINaffilie,
        copieCINconjoint,
        utilisateurId,
        finish:false

    });

    let existingPrestationSou;
    try {

        existingPrestationSou = await utilisateur.findById(utilisateurId)

    } catch (err) {
        const error = new httpError('problems!!!', 500);
        return next(error)
    }

    try {
        await createdPrestationSou.save();
        existingPrestationSou.prestationSoutien.push(createdPrestationSou)
        existingPrestationSou.save()
    } catch (err) {
        const error = new httpError('failed signup', 500);
        return next(error);
    }

    res.status(201).json({ prestationsou: createdPrestationSou  });


}


const getPrestationSou = async (req, res, next) => {
    let existingPrestationSou;
    try {
        existingPrestationSou = await prestationSoutien.find()
    } catch {
        const error = new httpError('failed signup', 500);
        return next(error);
    }
    res.json({ prestationsou: existingPrestationSou })
}


const getPrestationSouById = async (req, res, next) => {
    const id= req.params.id
    let existingPrestationSou;
    try {
        existingPrestationSou = await prestationSoutien.findById(id)
    } catch {
        const error = new httpError('failed signup', 500);
        return next(error);
    }
    res.json({ prestationsou: existingPrestationSou })
}
const updatedemandeLocation = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { demandeLocation } = req.body;
    const id = req.params.id;
    let existingPrestationSou;
  
    try {
        existingPrestationSou = await prestationSoutien.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPrestationSou.demandeLocation = demandeLocation;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPrestationSou: existingPrestationSou });
  };
  const updateattestaionSalAffilie = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { attestaionSalAffilie } = req.body;
    const id = req.params.id;
    let existingPrestationSou;
  
    try {
        existingPrestationSou = await prestationSoutien.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPrestationSou.attestaionSalAffilie = attestaionSalAffilie;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPrestationSou: existingPrestationSou });
  };
  const updateattestaionSalConjoint = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { attestaionSalConjoint } = req.body;
    const id = req.params.id;
    let existingPrestationSou;
  
    try {
        existingPrestationSou = await prestationSoutien.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPrestationSou.attestaionSalConjoint = attestaionSalConjoint;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPrestationSou: existingPrestationSou });
  }; 
  const updateextraitNaissanceEnfant = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { extraitNaissanceEnfant } = req.body;
    const id = req.params.id;
    let existingPrestationSou;
  
    try {
        existingPrestationSou = await prestationSoutien.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPrestationSou.extraitNaissanceEnfant = extraitNaissanceEnfant;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPrestationSou: existingPrestationSou });
  }; 
  const updatecopieDecisionMutation = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { copieDecisionMutation } = req.body;
    const id = req.params.id;
    let existingPrestationSou;
  
    try {
        existingPrestationSou = await prestationSoutien.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPrestationSou.copieDecisionMutation = copieDecisionMutation;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPrestationSou: existingPrestationSou });
  }; 
  const updatecopieContratLocation = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { copieContratLocation } = req.body;
    const id = req.params.id;
    let existingPrestationSou;
  
    try {
        existingPrestationSou = await prestationSoutien.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPrestationSou.copieContratLocation = copieContratLocation;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPrestationSou: existingPrestationSou });
  }; 
  const updatecopieCINaffilie = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { copieCINaffilie } = req.body;
    const id = req.params.id;
    let existingPrestationSou;
  
    try {
        existingPrestationSou = await prestationSoutien.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPrestationSou.copieCINaffilie = copieCINaffilie;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPrestationSou: existingPrestationSou });
  }; 
  const updatecopieCINconjoint = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { copieCINconjoint } = req.body;
    const id = req.params.id;
    let existingPrestationSou;
  
    try {
        existingPrestationSou = await prestationSoutien.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPrestationSou.copieCINconjoint = copieCINconjoint;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPrestationSou: existingPrestationSou });
  }; 

exports.ajout=ajout
exports.getPrestationSou=getPrestationSou
exports.getPrestationSouById=getPrestationSouById
exports.updatedemandeLocation=updatedemandeLocation
exports.updateattestaionSalAffilie=updateattestaionSalAffilie
exports.updateattestaionSalConjoint=updateattestaionSalConjoint
exports.updateextraitNaissanceEnfant=updateextraitNaissanceEnfant
exports.updatecopieDecisionMutation=updatecopieDecisionMutation
exports.updatecopieContratLocation=updatecopieContratLocation
exports.updatecopieCINaffilie=updatecopieCINaffilie
exports.updatecopieCINconjoint=updatecopieCINconjoint