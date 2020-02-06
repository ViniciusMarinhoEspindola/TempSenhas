var User = require('../../entitites/user.model');

var UserRepository = {
    FindAll: () => {
        return User.find()
    },

    FindOne: (id) => {
        return User.findById(id)
    },

    Create: (params) => {
        let user = new User (params)

        user.save((err) => {
            if (err) return console.log(err)
        })
        return user
    },

    Update: (id, params) => {
        User.updateOne({_id: id})
    },

    Delete: (id) => {
        User.findOneAndDelete({_id: id}, (err) => {
            if(err) return console.log(err)
        })
    }
}

module.exports = UserRepository;