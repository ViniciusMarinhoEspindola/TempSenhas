const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const sassMiddleware = require('node-sass-middleware')

const testeRouter = require('./src/routes/teste.route')
const logRouter = require('./src/routes/log.route')
const clienteRouter = require('./src/routes/clientes.route')
const usuarioRouter = require('./src/routes/user.route')
const hospedagemRouter = require('./src/routes/hospedagem.route')

const app = express()
const mongoose = require('mongoose')

const mongoDB = `mongodb://127.0.0.1/Teste`

mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Erro na ligação ao MongoDB'))

app.set('views', path.join(__dirname, '/src/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

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
//app.use(express.static(path.join(__dirname, 'public')))

app.use('/Testes', testeRouter)
app.use('/Cliente', clienteRouter)
app.use('/Usuario', usuarioRouter)
app.use('/Log', logRouter)
app.use('/Hospedagem', hospedagemRouter)
app.use('/', (req, res) => {
  res.render('index')
})

// Server
const porta = process.env.port || 8000

app.listen(porta, () => {
  console.log('Servidor na porta: ' + porta)
})
