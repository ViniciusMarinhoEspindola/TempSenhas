var Hosp = require('../../entitites/hospedagens.model');

var HospedagemRepository = {
    FindAll: () => {
        Hosp.find().exec((err, result) => {
            if(err) throw err

            return result
        });
    },

    FindOne: (id) => {
        Hosp.findById(id).exec((err, result) => {
            if(err) throw err;

            return result
        })
    },

    Create: (params) => {
        let hosp = new Hosp (params)

        hosp.save((err) => {
            if (err) return console.log(err)
        })
        return hosp
    },

    Update: (id, params) => {
        Hosp.updateOne({_id: id})
    },

    Delete: (id) => {
        Hosp.deleteOne({_id: id})
    }
}

module.exports = HospedagemRepository;