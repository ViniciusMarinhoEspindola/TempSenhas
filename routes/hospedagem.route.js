const express = require('express')
const router = express.Router()

const HospedagemController = require('../controllers/Clientes/hospedagem.controller')

router.get('/testar', HospedagemController.test)
router.get('/', HospedagemController.list)
router.post('/create', HospedagemController.create)
router.get('/:id', HospedagemController.details)
router.post('/:id/edit', HospedagemController.update)
router.post('/:id/remove', HospedagemController.delete)

module.exports = router