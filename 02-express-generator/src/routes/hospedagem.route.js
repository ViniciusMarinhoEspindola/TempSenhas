const express = require('express')
const router = express.Router()

const HospedagemController = require('../controllers/Clientes/hospedagem.controller')

router.get('/Hospedagem/testar', HospedagemController.test)

router.route('/Hospedagem')
    .get(HospedagemController.list)
    .post(HospedagemController.create)

router.route('/Hospedagem/:id')
    .get(HospedagemController.details)
    .put(HospedagemController.update)
    .delete(HospedagemController.delete)

module.exports = router
