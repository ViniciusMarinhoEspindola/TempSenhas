// Banco
const mongoose = require('mongoose')
const mongoDB = process.env.MONGO_CONNECTION || `mongodb+srv://root:root123456@locallibrary-cutnw.gcp.mongodb.net/Senhas?retryWrites=true&w=majority`

mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.Promise = global.Promise
const db = mongoose.connection

db.on('error', console.error.bind(console, 'Erro na ligação ao MongoDB'))

module.exports = db