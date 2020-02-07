const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const sassMiddleware = require('node-sass-middleware')

const testeRouter = require('./routes/teste.route')
const logRouter = require('./routes/log.route')
const clienteRouter = require('./routes/clientes.route')
const usuarioRouter = require('./routes/user.route')
const hospedagemRouter = require('./routes/hospedagem.route')

const app = express()
const mongoose = require('mongoose')

const mongoDB = `mongodb://127.0.0.1/Teste`

mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Erro na ligação ao MongoDB'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true,
  })
)
app.use(express.static(path.join(__dirname, 'public')))

app.use('/Testes', testeRouter)
app.use('/Cliente', clienteRouter)
app.use('/Usuario', usuarioRouter)
app.use('/Log', logRouter)
app.use('/Hospedagem', hospedagemRouter)

// Server
const porta = process.env.port || 8000

app.listen(porta, () => {
  console.log('Servidor na porta: ' + porta)
})
