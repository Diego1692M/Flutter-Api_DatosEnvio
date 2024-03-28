const { Router } = require('express')

const route = Router()

//Listar todos los datos
const { getEnvio, postEnvio, putEnvio, deleteEnvio } = require('../controllers/envio') //Importando el controlador

route.get('/', getEnvio)

route.post('/', postEnvio)

route.put('/:cedula', putEnvio)

route.delete('/:cedula', deleteEnvio)

module.exports = route