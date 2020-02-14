const User = require('../models/repositories/User/user.repository')
const LocalStrategy   = require('passport-local').Strategy
const bCrypt = require('bcrypt')

module.exports = function(passport) {
    passport.serializeUser((user, done) => {
        console.log('serializando user: ' + user)
        done(null, user._id)
    })

    passport.deserializeUser((id, done) => {
        let user = User.FindOne(id)
        console.log('deserializando user: ' + user)
        done(null, user)
    })

    passport.use('login', new LocalStrategy({
        passReqToCallback : true
        },
        async (req, username, password, done) => {
            const user = await User.FindOne({ 'username' :  username })
            if(!user){
                console.log('User inválido')
                return done(null, false)
            }
            if (!isValidPassword(user, password))
            {
                console.log('Senha inválida')
                return done(null, false)
            }

            return done(null, user)
        })
    )

    const isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password)
    }
}