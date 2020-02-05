//var Cliente = require('../../models/entitites/clientes.model');
var Cliente = require('../../models/repositories/Cliente/cliente.repository')

var ClienteController = {
    test: (req, res) => {
        res.send('Olá! Isso é um Teste');
    },

    list: async (req, res) => {
        res.send(await Cliente.FindAll())
    },

    details: (req, res) => {
        let result = Cliente.FindOne(req.params.id)
        res.send(result)
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
                        obs: req.body.obsDominio
                    }
                }
            ]
        }

        let result = Cliente.Create(params);
        res.send('Cliente cadastrado com sucesso! <br> id: ' + result._id)
    },

    update: (req, res) => {
        Cliente.Update(req.params.id)
    },

    delete: async (req, res) => {
        Cliente.Delete(req.params.id)
        res.send('deletado com sucesso!')
    }
}

module.exports = ClienteController;