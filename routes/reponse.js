const express = require('express');
const route = express.Router();

const reponseControllers = require('../controllers/reponse')

const {check} = require('express-validator')


route.post('/ajout', 
check('description')
.not()
.isEmpty(),
 
reponseControllers.ajout)

route.get('/',reponseControllers.getReponse)
route.get('/:id',reponseControllers.getReponseById)

module.exports= route