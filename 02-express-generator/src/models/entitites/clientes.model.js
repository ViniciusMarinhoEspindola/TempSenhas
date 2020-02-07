const mongoose = require('mongoose')
const schema = mongoose.Schema

let DominioSchema = new schema({
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
})

let ClienteSchema = new schema({
  nome: {
    type: String,
    required: 'Este campo é obrigatório',
  },
  status: {
    type: Boolean,
    required: 'Este campo é obrigatório',
  },
  projetos: [
    {
      titulo: {
        type: String,
        required: 'Este campo é obrigatório',
      },
      status: {
        type: Boolean,
        required: 'Este campo é obrigatório',
      },
      hospedagens: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'hospedagens',
        },
      ],
      dominio: DominioSchema,
    },
  ],
  created_at: {
    type: Date,
    required: 'Este campo é obrigatório',
    default: Date.now,
  },
})

module.exports = mongoose.model('clientes', ClienteSchema)
