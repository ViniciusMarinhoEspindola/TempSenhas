var Hosp = require('../../entitites/hospedagens.model')

var HospedagemRepository = {
  FindAll: () => Hosp.find(),

  FindOne: id => Hosp.findById(id),

  Create: params => {
    let hosp = new Hosp(params)

    hosp.save(err => {
      if (err) return console.log(err)
    })
    return hosp
  },

  Update: (id, params) => {
    Hosp.updateOne({ _id: id }, params, { runValidators: true }, err => {
      if (err) return console.log(err)
    })
  },

  Delete: id => {
    Hosp.findOneAndDelete({ _id: id }, err => {
      if (err) return console.log(err)
    })
  },
}

module.exports = HospedagemRepository
