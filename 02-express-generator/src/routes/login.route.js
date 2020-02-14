var express = require('express')
var router = express.Router()
var passport = require('passport')

function isAuthenticated () {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/login?fail=true')
  }
}

router.post('/login', passport.authenticate('login', {
  successRedirect: '/home',
  failureRedirect: '/',
  failureFlash : true
}))

router.get('/home', isAuthenticated(), function(req, res){
  res.send('testando 123...')
})

module.exports = router