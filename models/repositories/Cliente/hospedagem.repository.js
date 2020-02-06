var Hosp = require('../../entitites/hospedagens.model');

var HospedagemRepository = {
    FindAll: () => {
        return Hosp.find()
    },

    FindOne: (id) => {
        return Hosp.findById(id)
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
        Hosp.findOneAndDelete({_id: id}, (err) => {
            if(err) return console.log(err)
        })
    }
}

module.exports = HospedagemRepository;