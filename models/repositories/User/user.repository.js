var User = require('../../entitites/user.model');

var UserRepository = {
    FindAll: () => {
        User.find().populate('projetos.hospedagens').exec((err, result) => {
            if(err) throw err;

            console.log(result)
            return result
        });
    },

    FindOne: (id) => {
        User.findById(id).populate('projetos.hospedagens').exec((err, result) => {
            if(err) throw err;

            return result
        });
    },

    Create: (params) => {
        let user = new Cliente (params)

        user.save((err) => {
            if (err) return console.log(err)
        })
        return user
    },

    Update: (id, params) => {
        User.updateOne({_id: id})
    },

    Delete: (id) => {
        User.deleteOne({_id: id})
    }
}

module.exports = UserRepository;