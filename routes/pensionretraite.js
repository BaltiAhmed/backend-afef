const express = require('express');
const route = express.Router();

const pensionretraiteControllers = require('../controllers/pensionretraite')

const {check} = require('express-validator')


route.post('/ajout', 
check('arreteMISEretraite')
.not()
.isEmpty(),
check('releveService')
.not()
.isEmpty(),
check('photoIdent')
.not()
.isEmpty(),
check('extraitNaissance')
.not()
.isEmpty(),

pensionretraiteControllers.ajout)

route.get('/',pensionretraiteControllers.getPensionR)
route.get('/:id',pensionretraiteControllers.getPensionRById)

module.exports= route