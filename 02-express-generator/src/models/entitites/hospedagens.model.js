const mongoose = require('mongoose')
const schema = mongoose.Schema

let SenhasSchema = new schema({
  nome: {
    type: String,
    max: 150,
  },
  tipo: {
    type: String,
  },
  host: {
    type: String,
  },
  user: {
    type: String,
    max: 150,
  },
  senha: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  obs: {
    type: String,
  },
})

let HospedagemSchema = new schema({
  nome: {
    type: String,
    required: 'Este campo é obrigatório',
    max: 150,
  },
  user: {
    type: String,
    required: 'Este campo é obrigatório',
    max: 150,
  },
  senha: {
    type: String,
    required: 'Este campo é obrigatório',
    max: 150,
  },
  status: {
    type: Boolean,
    required: 'Este campo é obrigatório',
  },
  obs: {
    type: String,
  },
  senhas: [SenhasSchema],
  created_at: {
    type: Date,
    required: 'Este campo é obrigatório',
    default: Date.now,
  },
})

module.exports = mongoose.model('hospedagens', HospedagemSchema)
