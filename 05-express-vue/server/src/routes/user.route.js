const express = require('express')
const router = express.Router()

const UserController = require('../controllers/User/user.controller')

router.get('/Usuario/testar', UserController.test)

router.route('/Usuario')
    .get(UserController.list)
    .post(UserController.create)

router.route('/Usuario/:id')
    .get(UserController.details)
    .put(UserController.update)
    .delete(UserController.delete)

module.exports = router
