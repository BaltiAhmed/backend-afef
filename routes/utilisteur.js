const express = require('express');
const route = express.Router();

const utilisateurRoute = require('../controllers/utilisateur')

const {check} = require('express-validator')


route.post('/signup', 
check('nom')
.not()
.isEmpty(),
check('prenom')
.not()
.isEmpty(),
check('adresse')
.not()
.isEmpty(),
check('tel')
.not()
.isEmpty(),
check('Dnaissance')
.not()
.isEmpty(),
check('email')
.normalizeEmail(),
check('password')
.isLength({min:8})
, utilisateurRoute.signup)

route.post('/login', 
check('email')
.normalizeEmail(),
check('password')
.isLength({min:8})
, utilisateurRoute.login)

route.post('/:id', 
check('nom')
.not()
.isEmpty(),
check('prenom')
.not()
.isEmpty(),
check('adresse')
.not()
.isEmpty(),
check('tel')
.not()
.isEmpty(),
check('Dnaissance')
.not()
.isEmpty(),
check('email')
.normalizeEmail(),
check('password')
.isLength({min:8})
, utilisateurRoute.updateUtilisateur)

route.get('/',utilisateurRoute.getUtilisateur)
route.get('/:id',utilisateurRoute.getUtilisateurById)

route.delete('/:id',utilisateurRoute.deleteUtilisateur)
route.delete('/bloc/:id',utilisateurRoute.BlocUser)

module.exports= route




