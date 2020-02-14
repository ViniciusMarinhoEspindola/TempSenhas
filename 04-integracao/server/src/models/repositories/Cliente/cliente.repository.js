const Cliente = require('../../entitites/clientes.model')

const ClienteRepository = {
  FindAll: () => Cliente.find().populate('projetos.hospedagens'),

  FindOne: id => Cliente.findById(id).populate('projetos.hospedagens'),

  Create: params => {
    let cliente = new Cliente(params)

    cliente.save(err => {
      if (err) return console.log(err)
    })
    return cliente
  },

  Update: (id, params) => {
    Cliente.updateOne({ _id: id }, params, { runValidators: true }, err => {
      if (err) return console.log(err)
    })
  },

  Delete: id => {
    Cliente.findOneAndDelete({ _id: id }, err => {
      if (err) return console.log(err)
    })
  },
}

module.exports = ClienteRepository
