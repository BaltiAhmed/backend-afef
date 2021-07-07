
const httpError = require('../models/error');

const pensionOrphelin = require('../models/pensionOrphelin');
const utilisateur = require('../models/utilisateur')

const { validationResult } = require('express-validator');


const ajout = async (req, res, next) =>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return next
            (new httpError('invalid input passed ', 422));

    }

    const { demande, acteDeces, releveServices, extraitNaissOrphelin, cinOrphelin, declarationNonEmploi, certificatInscritUniversitaire, attestationNonAff, attestationNonBenif, carteHandicap, jugementTutelle, photoTuteur, copieCinTuteur, utilisateurId } = req.body;


    const createdPensionO = new pensionOrphelin({
        demande,
        acteDeces,
        releveServices,
        extraitNaissOrphelin,
        cinOrphelin,
        declarationNonEmploi,
        certificatInscritUniversitaire,
        attestationNonAff,
        attestationNonBenif,
        carteHandicap,
        jugementTutelle,
        photoTuteur,
        copieCinTuteur,
        utilisateurId,
        finish:false

    });

    let existingPensionO;
    try {

        existingPensionO = await utilisateur.findById(utilisateurId)

    } catch (err) {
        const error = new httpError('problems!!!', 500);
        return next(error)
    }

    try {
        await createdPensionO.save();
        existingPensionO.pensionOrphelin.push(createdPensionO)
        existingPensionO.save()
    } catch (err) {
        const error = new httpError('failed signup', 500);
        return next(error);
    }

    res.status(201).json({ PensionO: createdPensionO  });


}


const getPensionO = async (req, res, next) => {
    let existingPensionO;
    try {
        existingPensionO = await pensionOrphelin.find()
    } catch {
        const error = new httpError('failed signup', 500);
        return next(error);
    }
    res.json({ PensionO: existingPensionO })
}


const getPensionOById = async (req, res, next) => {
    const id= req.params.id
    let existingPensionO;
    try {
        existingPensionO = await pensionOrphelin.findById(id)
    } catch {
        const error = new httpError('failed signup', 500);
        return next(error);
    }
    res.json({ PensionO: existingPensionO })
}
const updatedemande  = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { demande } = req.body;
    const id = req.params.id;
    let existingPensionO;
  
    try {
        existingPensionO = await pensionOrphelin.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionO.demande = demande;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPensionO: existingPensionO });
  };
  const updateacteDeces = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return next(new httpError("invalid input passed ", 422));
    }
  
    const { acteDeces } = req.body;
    const id = req.params.id;
    let existingPensionO;
  
    try {
        existingPensionO = await pensionOrphelin.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionO.acteDeces = acteDeces;
  
    try {
      existinguser.save();
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
  
    const { releveServices } = req.body;
    const id = req.params.id;
    let existingPensionO;
  
    try {
        existingPensionO = await pensionOrphelin.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionO.releveServices = releveServices;
  
    try {
      existinguser.save();
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
  
    const { extraitNaissOrphelin } = req.body;
    const id = req.params.id;
    let existingPensionO;
  
    try {
        existingPensionO = await pensionOrphelin.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionO.extraitNaissOrphelin = extraitNaissOrphelin;
  
    try {
      existinguser.save();
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
  
    const { cinOrphelin } = req.body;
    const id = req.params.id;
    let existingPensionO;
  
    try {
        existingPensionO = await pensionOrphelin.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionO.cinOrphelin = cinOrphelin;
  
    try {
      existinguser.save();
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
  
    const { declarationNonEmploi } = req.body;
    const id = req.params.id;
    let existingPensionO;
  
    try {
        existingPensionO = await pensionOrphelin.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionO.declarationNonEmploi = declarationNonEmploi;
  
    try {
      existinguser.save();
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
  
    const { certificatInscritUniversitaire } = req.body;
    const id = req.params.id;
    let existingPensionO;
  
    try {
        existingPensionO = await pensionOrphelin.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionO.certificatInscritUniversitaire = certificatInscritUniversitaire;
  
    try {
      existinguser.save();
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
  
    const { attestationNonAff } = req.body;
    const id = req.params.id;
    let existingPensionO;
  
    try {
        existingPensionO = await pensionOrphelin.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionO.attestationNonAff = attestationNonAff;
  
    try {
      existinguser.save();
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
  
    const { attestationNonBenif } = req.body;
    const id = req.params.id;
    let existingPensionO;
  
    try {
        existingPensionO = await pensionOrphelin.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionO.attestationNonBenif = attestationNonBenif;
  
    try {
      existinguser.save();
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
  
    const { carteHandicap } = req.body;
    const id = req.params.id;
    let existingPensionO;
  
    try {
        existingPensionO = await pensionOrphelin.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionO.carteHandicap = carteHandicap;
  
    try {
      existinguser.save();
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
  
    const { jugementTutelle } = req.body;
    const id = req.params.id;
    let existingPensionO;
  
    try {
        existingPensionO = await pensionOrphelin.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionO.jugementTutelle = jugementTutelle;
  
    try {
      existinguser.save();
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
  
    const { photoTuteur } = req.body;
    const id = req.params.id;
    let existingPensionO;
  
    try {
        existingPensionO = await pensionOrphelin.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionO.photoTuteur = photoTuteur;
  
    try {
      existinguser.save();
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
  
    const { copieCinTuteur } = req.body;
    const id = req.params.id;
    let existingPensionO;
  
    try {
        existingPensionO = await pensionOrphelin.findById(id);
    } catch {
      return next(new httpError("failed ", 500));
    }
  
    existingPensionO.copieCinTuteur = copieCinTuteur;
  
    try {
      existinguser.save();
    } catch {
      return next(new httpError("failed to save ", 500));
    }
  
    res.status(200).json({ existingPensionO: existingPensionO });
  };

exports.ajout=ajout
exports.getPensionO=getPensionO
exports.getPensionOById=getPensionOById
exports.updatedemande=updatedemande
exports.updateacteDeces=updateacteDeces
exports.updatereleveServices=updatereleveServices
exports.updateextraitNaissOrphelin=updateextraitNaissOrphelin
exports.updatecinOrphelin=updatecinOrphelin
exports.updatedeclarationNonEmploi=updatedeclarationNonEmploi
exports.updatecertificatInscritUniversitaire=updatecertificatInscritUniversitaire
exports.updateattestationNonAff=updateattestationNonAff
exports.updateattestationNonBenif=updateattestationNonBenif
exports.updatecarteHandicap=updatecarteHandicap
exports.updatejugementTutelle=updatejugementTutelle
exports.updatephotoTuteur=updatephotoTuteur
exports.updatecopieCinTuteur=updatecopieCinTuteur