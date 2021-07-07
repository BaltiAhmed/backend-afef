const express = require('express');
const route = express.Router();

const pensionOrphelinControllers = require('../controllers/pensionOrphelin')

const {check} = require('express-validator')


route.post('/ajout', 
check('demande')
.not()
.isEmpty(),
check('acteDeces')
.not()
.isEmpty(),
check('releveServices')
.not()
.isEmpty(),
check('extraitNaissOrphelin')
.not()
.isEmpty(),
check('cinOrphelin')
.not()
.isEmpty(),
check('declarationNonEmploi')
.not()
.isEmpty(),
check('certificatInscritUniversitaire')
.not()
.isEmpty(),
check('attestationNonAff')
.not()
.isEmpty(),
check('attestationNonBenif')
.not()
.isEmpty(),
check('carteHandicap')
.not()
.isEmpty(),
check('jugementTutelle')
.not()
.isEmpty(),
check('photoTuteur')
.not()
.isEmpty(),
check('copieCinTuteur')
.not()
.isEmpty()
, pensionOrphelinControllers.ajout)

route.get('/',pensionOrphelinControllers.getPensionO)
route.get('/:id',pensionOrphelinControllers.getPenionOById)

module.exports= route