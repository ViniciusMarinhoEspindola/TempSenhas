//var Cliente = require('../../models/entitites/clientes.model');
const Log = require('../../models/repositories/Log/log.repository')

const LogController = {
  test: (req, res) => {
    res.send('Olá! Isso é um Teste')
  },

  list: async (req, res) => {
    res.send(await Log.FindAll())
  },

  details: async (req, res) => {
    res.send(await Log.FindOne(req.params.id))
  },

  create: (req, res) => {
    let params = {
      nome: req.body.nome,
      status: true,
      projetos: [
        {
          titulo: req.body.tituloProjeto,
          status: true,
          hospedagens: [req.body.hospId],
          dominio: {
            nome: req.body.nomeDominio,
            user: req.body.userDominio,
            senha: req.body.senhaDominio,
            status: true,
            obs: req.body.obsDominio,
          },
        },
      ],
    }
    let result = Log.Create(req.body)
    res.send('Log cadastrado com sucesso! <br> id: ' + result._id)
  },

  update: (req, res) => {
    res.send(Log.Update(req.params.id, req.body))
  },

  delete: async (req, res) => {
    Log.Delete(req.params.id)
    res.send('deletado com sucesso!' + req.params.id)
  },
}

module.exports = LogController
