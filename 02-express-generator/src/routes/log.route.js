const express = require('express')
const router = express.Router()

const LogController = require('../controllers/Log/log.controller')

router.get('/testar', LogController.test)

router.get('/', LogController.list)
router.post('/create', LogController.create)
router.get('/:id', LogController.details)
router.post('/:id/edit', LogController.update)
router.post('/:id/remove', LogController.delete)

module.exports = router
