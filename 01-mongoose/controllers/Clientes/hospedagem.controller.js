//var Hosp = require('../../models/entitites/clientes.model')
var Hosp = require('../../models/repositories/Cliente/hospedagem.repository')

var HospedagemController = {
    test: (req, res) => {
        res.send('Olá! Isso é um Teste')
    },

    list: async (req, res) => {
        res.send(await Hosp.FindAll())
    },

    details: async (req, res) => {
        res.send(await Hosp.FindOne(req.params.id))
    },

    create: (req, res) => {
        // let paramss = {
        //     nome: req.body.nome,
        //     user: req.body.user,
        //     senha: req.body.senha,
        //     status: true,
        //     obs: req.body.obs,
        //     senhas: [
        //         {
        //             nome: req.body.nmSenha,
        //             host: req.body.hostSenha,
        //             user: req.body.userSenha,
        //             senha: req.body.senhaSenha
        //         }
        //     ]
        // }

        let result = Hosp.Create(req.body)
        res.send('Hospedagem cadastrada com sucesso! <br> id: ' + result._id)
    },

    update: (req, res) => {
        res.send(Hosp.Update(req.params.id, req.body))
    },

    delete: (req, res) => {
        Hosp.Delete(req.params.id)
        res.send("Deletado com sucesso!")
    }
}

module.exports = HospedagemController