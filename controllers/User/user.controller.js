//var Cliente = require('../../models/entitites/clientes.model');
const User = require('../../models/repositories/User/user.repository')

const UserController = {
    test: (req, res) => {
        res.send('Olá! Isso é um Teste');
    },

    list: async (req, res) => {
        res.send(await User.FindAll())
    },

    details: async (req, res) => {
        res.send( await User.FindOne(req.params.id))
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
        let result = User.Create(req.body)
        res.send('Usuário cadastrado com sucesso! <br> id: ' + result._id)
    },

    update: (req, res) => {
        User.Update(req.params.id)
    },

    delete: async (req, res) => {
        User.Delete(req.params.id)
        res.send('deletado com sucesso!')
    }
}

module.exports = UserController;