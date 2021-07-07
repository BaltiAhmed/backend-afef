const express = require('express');
const route = express.Router();

const prestationSoutienControllers = require('../controllers/prestationSoutien')

const {check} = require('express-validator')


route.post('/ajout', 
check('demandeLocation')
.not()
.isEmpty(),
check('attestaionSalAffilie')
.not()
.isEmpty(),
check('attestaionSalConjoint')
.not()
.isEmpty(),
check('extraitNaissanceEnfant')
.not()
.isEmpty(),
check('copieDecisionMutation')
.not()
.isEmpty(),
check('copieContratLocation')
.not()
.isEmpty(),
check('copieCINaffilie')
.not()
.isEmpty(),
check('copieCINconjoint')
.not()
.isEmpty(),

prestationSoutienControllers.ajout)

route.get('/',prestationSoutienControllers.getPrestationSou)
route.get('/:id',prestationSoutienControllers.getPrestationSouById)

module.exports= route