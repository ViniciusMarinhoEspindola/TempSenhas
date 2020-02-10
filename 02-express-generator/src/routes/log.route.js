const express = require('express')
const router = express.Router()

const LogController = require('../controllers/Log/log.controller')

router.get('/Logs/testar', LogController.test)

router.route('/Logs')
    .get(LogController.list)
    .post(LogController.create)

router.route('/Logs/:id')
    .get(LogController.details)
    .put(LogController.update)
    .delete(LogController.delete)

module.exports = router
