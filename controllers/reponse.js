const httpError = require('../models/error');

const reponse = require('../models/reponse');
const utilisateur = require('../models/utilisateur')

const { validationResult } = require('express-validator');


const ajout = async (req, res, next) =>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return next
            (new httpError('invalid input passed ', 422));

    }

    const { description,  utilisateurId } = req.body;


    const createdReponse = new reponse({

        description,  
        utilisateurId,
        finish:false

    });

    let existingReponse;
    try {

        existingReponse = await utilisateur.findById(utilisateurId)

    } catch (err) {
        const error = new httpError('problems!!!', 500);
        return next(error)
    }

    try {
        await createdReponse.save();
        existingReponse.reponse.push(createdReponse)
        existingReponse.save()
    } catch (err) {
        const error = new httpError('failed signup', 500);
        return next(error);
    }

    res.status(201).json({ rec: createdReponse  });


}


const getReponse = async (req, res, next) => {
    let existingReponse;
    try {
        existingReponse = await reponse.find()
    } catch {
        const error = new httpError('failed signup', 500);
        return next(error);
    }
    res.json({ rep: existingReponse })
}


const getReponseById = async (req, res, next) => {
    const id= req.params.id
    let existingReponse;
    try {
        existingReponse = await reponse.findById(id)
    } catch {
        const error = new httpError('failed signup', 500);
        return next(error);
    }
    res.json({ rep: existingReponse })
}

exports.ajout=ajout
exports.getReponse=getReponse
exports.getReponseById=getReponseById