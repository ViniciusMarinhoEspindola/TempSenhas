const express = require('express')
const router = express.Router()

const ClienteController = require('../controllers/Clientes/cliente.controller')

router.get('/testar', ClienteController.test)
router.get('/', ClienteController.list)
router.post('/create', ClienteController.create)
router.get('/:id', ClienteController.details)
router.post('/:id/edit', ClienteController.update)
router.post('/:id/remove', ClienteController.delete)

module.exports = router