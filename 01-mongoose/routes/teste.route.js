const express = require('express');
const router = express.Router();
var Cliente = require('../models/entitites/clientes.model');
var Hosp = require('../models/entitites/hospedagens.model');
const mongo = require('mongodb').MongoClient;

const TesteController = require('../controllers/teste.controller');

router.get('/testar', TesteController.test);
router.post('/create', TesteController.create);
router.get('/:id', TesteController.details);
router.get('/user/:id', (req, res) => {
    //Mongoose
    Cliente.findById(req.params.id).populate('projetos.hospedagens').exec((err, result) => {
        if(err) throw err;

        res.send(result)
    });
})
router.post('/Hospedagem', (req, res) => {
        let hosp = new Hosp (
            {
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
        );
        hosp.save((err) => {
            if (err) return console.log(err);

            res.send('Hospedagem registrada com sucesso <br> Id: ' + hosp._id);
        })
});

router.post('/Cliente', (req, res) => {
        let cliente = new Cliente (
            {
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
        )
        cliente.save((err) => {
            if (err) return console.log(err);

            res.send('Cliente registrado com sucesso<br> Id: ' + cliente._id);
        })
});
module.exports = router;