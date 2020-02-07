const express = require('express')
const router = express.Router()

const UserController = require('../controllers/User/user.controller')

router.get('/testar', UserController.test)
router.get('/', UserController.list)
router.post('/create', UserController.create)
router.get('/:id', UserController.details)
router.post('/:id/edit', UserController.update)
router.post('/:id/remove', UserController.delete)

module.exports = router