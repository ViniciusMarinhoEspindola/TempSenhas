const mongoose = require('mongoose')
const schema = mongoose.Schema

let LogsSchema = new schema({
  IPUser: {
    type: String,
    required: 'Este campo é obrigatório',
  },
  acao: {
    type: String,
    required: 'Este campo é obrigatório',
    max: 100,
  },
  tipo: {
    type: String,
    required: 'Este campo é obrigatório',
  },
  created_at: {
    type: Date,
    required: 'Este campo é obrigatório',
    default: Date.now,
  },
})

module.exports = mongoose.model('logs', LogsSchema)
