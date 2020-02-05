//var Hosp = require('../../models/entitites/clientes.model')
var Hosp = require('../../models/repositories/Cliente/hospedagem.repository')

var HospedagemController = {
    test: (req, res) => {
        res.send('Olá! Isso é um Teste')
    },

    list: (req, res) => {
        let result = Hosp.FindAll()
        res.send(result)
    },

    details: (req, res) => {
        let result = Hosp.FindOne(req.params.id)
        res.send(result)
    },

    create: (req, res) => {
        let params = {
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
                    senha: req.body.senhaSenha
                }
            ]
        }

        let result = Hosp.Create(params)
        res.send('Hospedagem cadastrada com sucesso! <br> id: ' + result._id)
    },

    update: (req, res) => {
        Hosp.Update(req.params.id)
    },

    delete: (req, res) => {
        Hosp.Delete(req.params.id)
    }
}

module.exports = HospedagemController