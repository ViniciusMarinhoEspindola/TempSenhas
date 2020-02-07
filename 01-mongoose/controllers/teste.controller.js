var Teste = require('../models/teste.model');

var TesteController = {
    test: (req, res) => {
        res.send('Olá! Teste');
    },

    create: (req, res) => {
        let teste = new Teste (
            {
                nome: req.body.nome,
                status: true
            }
        );
        teste.save((err) => {
            if (err) return next(err);

            res.send('Registrado com sucesso');
        })
    },

    details: (req, res) => {
        Teste.findById(req.params.id, (err, result) => {
            if(err) return next(err);

            res.send(result)
        });
    }
}

module.exports = TesteController;