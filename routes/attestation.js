const express = require('express');
const route = express.Router();

const attestationControllers = require('../controllers/attestation')

const {check} = require('express-validator')


route.post('/ajout', 
check('nom')
.not()
.isEmpty(),
check('prenom')
.not()
.isEmpty(),
check('tel')
.not()
.isEmpty(),
attestationControllers.ajout)

route.get('/',attestationControllers.getAttestation)
route.get('/:id',attestationControllers.getAttestationById)

module.exports= route

