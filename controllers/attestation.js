const httpError = require('../models/error');

const attestation = require('../models/attestation');
const utilisateur = require('../models/utilisateur')

const { validationResult } = require('express-validator');


const ajout = async (req, res, next) =>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return next
            (new httpError('invalid input passed ', 422));

    }

    const { nom, prenom,tel, utilisateurId } = req.body;


    const createdAttestation = new attestation({

        nom,
        prenom,
        tel,     
        utilisateurId,
        finish:false

    });

    let existingAttestation;
    try {

        existingAttestation = await utilisateur.findById(utilisateurId)

    } catch (err) {
        const error = new httpError('problems!!!', 500);
        return next(error)
    }

    try {
        await createdAttestation.save();
        existingAttestation.attestation.push(createdAttestation)
        existingAttestation.save()
    } catch (err) {
        const error = new httpError('failed signup', 500);
        return next(error);
    }

    res.status(201).json({ attes: createdAttestation  });


}


const getAttestation = async (req, res, next) => {
    let existingAllocation;
    try {
        existingAttestation = await attestation.find()
    } catch {
        const error = new httpError('failed signup', 500);
        return next(error);
    }
    res.json({ attes: existingAttestation })
}


const getAttestationById = async (req, res, next) => {
    const id= req.params.id
    let existingAttestation;
    try {
        existingAttestation = await attestation.findById(id)
    } catch {
        const error = new httpError('failed signup', 500);
        return next(error);
    }
    res.json({ attes: existingAttestation })
}

exports.ajout=ajout
exports.getAttestation=getAttestation
exports.getAttestationById=getAttestationById








