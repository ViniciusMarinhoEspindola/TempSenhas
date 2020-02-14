// Passport
const app = require('express')()
const passport = require('passport')
const session = require('express-session')
// Initialize Passport
require('../auth/init.auth')(passport)

app.use(session({secret: 'mySecretKey', resave: false, saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())

module.exports = app