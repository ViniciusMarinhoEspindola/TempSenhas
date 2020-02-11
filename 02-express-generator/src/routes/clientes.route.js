const express = require('express')
const router = express.Router()

const ClienteController = require('../controllers/Clientes/cliente.controller')

router.get('/Cliente/testar', ClienteController.test)

router.route('/Cliente')
    .get(ClienteController.list)
    .post(ClienteController.create)

router.route('/Cliente/:id')
    .get(ClienteController.details)
    .put(ClienteController.update)
    .delete(ClienteController.delete)

module.exports = router
