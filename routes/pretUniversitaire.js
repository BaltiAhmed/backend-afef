const express = require('express');
const route = express.Router();

const pretUniversitaireControllers = require('../controllers/pretUniversitaire')

const {check} = require('express-validator')


route.post('/ajout', 
check('demande')
.not()
.isEmpty(),
check('copieCINParent')
.not()
.isEmpty(),
check('copieCINEtudiant')
.not()
.isEmpty(),
check('attestationSalaire')
.not()
.isEmpty(),
check('declarationREV')
.not()
.isEmpty(),
check('rib')
.not()
.isEmpty(),
pretUniversitaireControllers.ajout)

route.get('/',pretUniversitaireControllers.getPretUniv)
route.get('/:id',pretUniversitaireControllers.getPretUnivById)

module.exports= route
