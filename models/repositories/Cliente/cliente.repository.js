var Cliente = require('../../entitites/clientes.model');

var ClienteRepository = {
    FindAll: () => {
        Cliente.find().populate('projetos.hospedagens').exec((err, result) => {
            if(err) throw err;

            console.log(result)
            return result
        });
    },

    FindOne: (id) => {
        Cliente.findById(id).populate('projetos.hospedagens').exec((err, result) => {
            if(err) throw err;

            return result
        });
    },

    Create: (params) => {
        let cliente = new Cliente (params)

        cliente.save((err) => {
            if (err) return console.log(err)
        })
        return cliente
    },

    Update: (id, params) => {
        Cliente.updateOne({_id: id})
    },

    Delete: (id) => {
        Cliente.deleteOne({_id: id})
    }
}

module.exports = ClienteRepository;