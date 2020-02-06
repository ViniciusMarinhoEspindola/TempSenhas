const Cliente = require('../../entitites/clientes.model');

const ClienteRepository = {
    FindAll: () => {
        return Cliente.find().populate('projetos.hospedagens')
    },

    FindOne: (id) => {
        return Cliente.findById(id).populate('projetos.hospedagens')
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
        Cliente.findOneAndDelete({_id: id}, (err) => {
            if(err) return console.log(err)
        })
    }
}

module.exports = ClienteRepository;