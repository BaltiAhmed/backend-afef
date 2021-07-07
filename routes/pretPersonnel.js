const express = require('express');
const route = express.Router();

const pretPersonnelControllers = require('../controllers/pretPersonnel')

const {check} = require('express-validator')


route.post('/ajout', 
check('demandepret')
.not()
.isEmpty(),
check('copieCIN')
.not()
.isEmpty(),
check('rib')
.not()
.isEmpty(),

pretPersonnelControllers.ajout)

route.get('/',pretPersonnelControllers.getPretPers)
route.get('/:id',pretpersonnelControllers.getPretPersById)

module.exports= route