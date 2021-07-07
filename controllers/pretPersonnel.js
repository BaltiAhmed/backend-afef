
const httpError = require('../models/error');

const pretPersonnel = require('../models/pretPersonnel');
const utilisateur = require('../models/utilisateur')

const { validationResult } = require('express-validator');


const ajout = async (req, res, next) =>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return next
            (new httpError('invalid input passed ', 422));

    }

    const { demandepret, copieCIN, rib, utilisateurId } = req.body;


    const createdPretPers = new pretPersonnel({
        
        demandepret,
        copieCIN,
        rib,
        utilisateurId,
        finish:false

    });

    let existingPretPers;
    try {

        existingPretPers = await utilisateur.findById(utilisateurId)

    } catch (err) {
        const error = new httpError('problems!!!', 500);
        return next(error)
    }

    try {
        await createdPretPers.save();
        existingPretPers.pretPersonnel.push(createdPretPers)
        existingPretPers.save()
    } catch (err) {
        const error = new httpError('failed signup', 500);
        return next(error);
    }

    res.status(201).json({ pretpers: createdPretPers  });


}


const getPretPers = async (req, res, next) => {
    let existingPretPers;
    try {
        existingPretPers = await pretPersonnel.find()
    } catch {
        const error = new httpError('failed signup', 500);
        return next(error);
    }
    res.json({ pretpers: existingPretPers })
}


const getPretPersById = async (req, res, next) => {
    const id= req.params.id
    let existingPretPers;
    try {
        existingPretPers = await pretPersonnel.findById(id)
    } catch {
        const error = new httpError('failed signup', 500);
        return next(error);
    }
    res.json({ pretpers: existingPretPers })
}
const updatedemandepret = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { demandepret } = req.body;
    const id = req.params.id;
    let existingPretPers;
  
    try {
        existingPretPers = await pretPersonnel.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPretPers.demandepret = demandepret;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPretPers: existingPretPers });
  };
  const updatecopieCIN = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { copieCIN } = req.body;
    const id = req.params.id;
    let existingPretPers;
  
    try {
        existingPretPers = await pretPersonnel.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPretPers.copieCIN = copieCIN;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPretPers: existingPretPers });
  };
  const updaterib = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { rib } = req.body;
    const id = req.params.id;
    let existingPretPers;
  
    try {
        existingPretPers = await pretPersonnel.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPretPers.rib = rib;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPretPers: existingPretPers });
  };

exports.ajout=ajout
exports.getPretPers=getPretPers
exports.getPretPersById=getPretPersById
exports.updatedemandepret=updatedemandepret
exports.updatecopieCIN=updatecopieCIN
exports.updaterib=updaterib