const express = require('express')
const router = express.Router()

const Cliente = require('../models/entitites/clientes.model')
const Hospedagem = require('../models/entitites/hospedagens.model')

const TesteController = require('../controllers/teste.controller')

router.get('/testar', TesteController.test)
router.post('/t/create', TesteController.create)
router.get('/t/:id', TesteController.details)
router.get('/t/user/:id', (req, res) => {
  //Mongoose
  Cliente.findById(req.params.id)
    .populate('projetos.hospedagens')
    .exec((err, result) => {
      if (err) throw err

      res.send(result)
    })
})
router.post('/Hospedagem', (req, res) => {
  let hospedagem = new Hospedagem({
    nome: req.body.nome,
    user: req.body.user,
    senha: req.body.senha,
    status: true,
    obs: req.body.obs,
    senhas: [
      {
        nome: req.body.nmSenha,
        host: req.body.hostSenha,
        user: req.body.userSenha,
        senha: req.body.senhaSenha,
      },
    ],
  })
  Hospedagem.save(err => {
    if (err) return console.log(err)

    res.send('Hospedagem registrada com sucesso <br> Id: ' + hospedagem._id)
  })
})

router.post('/Cliente', (req, res) => {
  let cliente = new Cliente({
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
  })
  cliente.save(err => {
    if (err) return console.log(err)

    res.send('Cliente registrado com sucesso<br> Id: ' + cliente._id)
  })
})
module.exports = router
