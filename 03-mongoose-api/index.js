const express = require('express');
const bodyParser = require('body-parser');

//Rotas
const teste = require('./routes/teste.route');
const log = require('./routes/log.route');
const cliente = require('./routes/clientes.route');
const usuario = require('./routes/user.route');
const hospedagem = require('./routes/hospedagem.route');

const app = express();
//

// BD
const mongoose = require('mongoose');

let Atlas = 'mongodb+srv://root:root123456@locallibrary-cutnw.gcp.mongodb.net/Senhas?retryWrites=true&w=majority'
let mongoDB = 'mongodb://127.0.0.1/Teste1';
mongoose.connect(Atlas, { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na ligação ao MongoDB'));
//


// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/Testes', teste);
app.use('/Cliente', cliente);
app.use('/Usuario', usuario);
app.use('/Log', log);
app.use('/Hospedagem', hospedagem);
//

// Server
let porta = 8000;

app.listen(porta, () => {
    console.log('Servidor na porta: ' + porta)
});
//