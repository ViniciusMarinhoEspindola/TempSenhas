const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.usuarios = require("./usuario.model.js")(mongoose);
db.logs = require('./log.model.js')(mongoose);
db.senhas = require('./senha.model.js')(mongoose);
db.dominios = require('./dominio.model.js')(mongoose);
db.hospedagens = require('./hospedagem.model.js')(moongose);
db.clientes = require('./cliente.model.js')(moongose);

module.exports = db;